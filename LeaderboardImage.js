const {spawnSync} = require('child_process');

class LeaderboardImage {
	constructor() {
		
	}
	getImage(dataFilePath, serverName, imgFilePath) {
		console.log(1);
		let cmd = spawnSync('cmd', ['/c', 'npm', 'run', 'build-dom', dataFilePath, serverName, imgFilePath]);
		console.log(2);
		if(cmd.stderr) { console.error("unexpected error: " + cmd.stderr); }
		/*console.log(`child stdout:\n${cmd.stdout}`);console.error(`child stderr:\n${cmd.stderr}`);*/

		console.log(3);
		cmd = spawnSync('cmd', ['/c', 'npm', 'run', 'render']);
		console.log(4);
		/*console.log(`child stdout:\n${cmd.stdout}`);console.error(`child stderr:\n${cmd.stderr}`);*/
	}
}

module.exports = LeaderboardImage;