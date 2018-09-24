const LeaderboardImage = require('./LeaderboardImage');


new LeaderboardImage().getImage("data/june-map.json", 1, 2);


/* example output

$ node get-image.js
Generating 1's Leaderboard image
        building layout using data[data/june-map.json] and image[2]...
        rendering image...
        Completed rendering 1's leaderboard image.

*/