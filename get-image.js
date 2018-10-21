const LeaderboardImage = require('./LeaderboardImage');

new LeaderboardImage().getImage("data/june-map.json", "Sample Header", "<PathToImage>");


/* example output

$ node get-image.js
Generating Sample Header's Leaderboard image
        building layout using data[data/june-map.json] and image[<PathToImage>]...
        rendering image...
        Completed rendering Sample Header's leaderboard image.

*/