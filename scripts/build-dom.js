var mkdirp = require("mkdirp");
var fs = require("fs-extra");
const month = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];

//console.log("process.argv", process.argv);
const filePath = process.argv[2];
const serverName = process.argv[3];
const serverImage = process.argv[4];
console.log(`\tGenerating ${serverName}'s Leaderboard design from datafile: ${filePath}...`);

init()
	.then(readData)
	.then(getTops)
	//.then(data => { console.log(JSON.stringify(data, null, 2)); return data; })
	.then(buildDom)
	.then(writeHtml)
	.catch(err => console.error(err));
	
function init() {
	const buildDir = 'build';
	return Promise.resolve(
		mkdirp('build', function (err) {
			if (err) console.error("error", err);
		})
	);
}

function readData() {
	let data = {players:[]};
	const contents = fs.readFileSync(filePath, 'utf8');
	if(contents.match('^\\[\\[')) { // alt. could have change code below to use Map v Object
		new Map(JSON.parse(contents)).forEach(v => data.players.push(v)); 
	} 
	else { 
		data = JSON.parse(contents); 
	}
	
	const statsConfig = JSON.parse(fs.readFileSync('resources/stats.config', 'utf8'));
	data.statsConfig = statsConfig;
	return data;
}

function getTops(data, num=10) {
	return { 
		statsConfig: data.statsConfig, 
		tops: Object.keys(data.players[0])
				.filter(k => !data.statsConfig.hiddenStats[k])
				.map(k => {
					data.players.sort((a,b) => b[k] - a[k]);
					return { name: k, top: [...data.players].slice(0,num).map(p => ({name:p.name, team:p.team, key:[k], value:p[k]}))};
				})
	};
}

function buildDom(data) {
	return header(serverName, serverImage) + data.tops.map(l => getDiv(l, data.statsConfig[l.name].label)) + footer();
}

function writeHtml(html) {
	fs.writeFileSync("build/tops.html", html);
	fs.createReadStream('resources/tops.css').pipe(fs.createWriteStream('build/tops.css'));
	fs.copy('resources/images', 'build/images');
	console.log("\tImage design completed.");
}

// html
function header(serverName="Team F'ing Valor MKE", serverImage="images/Mewtwo.png") {
	return "<html><head><link rel=\"stylesheet\" type=\"text/css\" href=\"tops.css\" /></head><body>"
		+ "<header><img src=\""+serverImage+"\" /> "+serverName+" - "+(month[new Date().getMonth()])+"</header>";
}
function getDiv(list, displayTitle) {
	return "<div class=\"list\"><img class=\"icon\" src=\"images/ico_"+list.name+".png\" />"  // Badge_Type_xxxx_01.png
		+ "<h4>" + (displayTitle?displayTitle:list.name) + "</h4><ol>" + list.top.map(getItem).join('') + "</ol></div>";
}

function getItem(player, i) {
	const place = [" first ", " second ", " third "];
	const longName = player.name.length >= 20  ? (player.name.length >= 24 ? ' superLongName ' : ' longName ') : '';
	return "<li class=\"" + (place[i] || "") + "\"><span class=\"" + player.team + longName + "\">" + player.name 
		+ "</span><span class=\"stat\">"+player.value+"</span></li>";
}
function footer() {
	return "</body></html>";
}