const {spawnSync} = require('child_process');

class LeaderboardImage {
	constructor() {
		
	}
	getImage(dataFilePath, serverName, imgFilePath) {
		console.log("Generating %s's Leaderboard image\n\tBuilding layout using data[%s] and image[%s]...", serverName, dataFilePath, imgFilePath);
		let cmd = spawnSync('cmd', ['/c', 'npm', 'run', 'build-dom', dataFilePath, serverName, imgFilePath]);		
		console.log(this.toString(cmd.stdout));		
		
		if(this.toString(cmd.stderr).length==0) {
			console.log("\tRendering image...");
			cmd = spawnSync('cmd', ['/c', 'npm', 'run', 'render']);
			
			if(!this.toString(cmd.stderr).length==0) { 
				console.error("Unexpected rendering error: " + this.toString(cmd.stderr));
			}
			else {
				console.log("\tCompleted rendering %s's leaderboard image.", serverName);
			}
		}
		else {
			console.error("Unexpected build error: [" + this.toString(cmd.stderr)+ "]"); 
		}
	}
	
	toString(buffer) {
		return String.fromCharCode.apply(null, new Uint8Array(buffer));
	}
}

module.exports = LeaderboardImage;


/* spawn output testing `cmd.stderr.data` stopped returning value
		console.log(String.fromCharCode.apply(null, new Uint8Array(cmd.stderr)));
		console.log(cmd.stdout);
		console.log('output-->');
			console.log(cmd.output.length);
			if(cmd.output[2]) { console.log('found error in subprocess'); }
			console.log(JSON.stringify(cmd.output[0]));
			console.log( String.fromCharCode.apply(null, new Uint8Array(cmd.output[1]))); 	// sysout
			console.log( String.fromCharCode.apply(null, new Uint8Array(cmd.output[2])));  // syserr
		console.log('error-->');console.log(cmd.error);
		//JSON.stringify(cmd);
		
			console.log(toString(cmd.stderr).length);  // buffer lenght is zero, test for this
			console.log('cmd.stderr='+(cmd.stderr));
			console.log(JSON.stringify(cmd.stderr));
			console.log(cmd.stderr["data"].length==0); // undefined error now... 0_o

*/