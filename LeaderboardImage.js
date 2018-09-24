const {spawnSync} = require('child_process');

class LeaderboardImage {
	constructor() {
		
	}
	getImage(dataFilePath, serverName, imgFilePath) {
		console.log("Generating %s's Leaderboard image\n\tbuilding layout using data[%s] and image[%s]...", serverName, dataFilePath, imgFilePath);
		let cmd = spawnSync('cmd', ['/c', 'npm', 'run', 'build-dom', dataFilePath, serverName, imgFilePath]);

		if(!cmd.stderr.data) {
			console.log("\trendering image...");
			cmd = spawnSync('cmd', ['/c', 'npm', 'run', 'render']);
			
			if(cmd.stderr.data) { 
				console.error("unexpected rendering error: " + cmd.stderr);
			}
			else {
				console.log("\tCompleted rendering %s's leaderboard image.", serverName);
			}
		}
		else {
			console.error("unexpected build error: [" + (JSON.stringify(cmd) )+ "]"); 
		}
	}
}

module.exports = LeaderboardImage;