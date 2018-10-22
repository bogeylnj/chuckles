const LeaderboardImage = require('./LeaderboardImage');

new LeaderboardImage().getImage("data/serverData.json", "Very Long Title, Very long Title to go full width", "images/mewtwo.jpg");


/* example output

$ node get-image.js
Generating Sample Header's Leaderboard image
        building layout using data[data/june-map.json] and image[<PathToImage>]...
        rendering image...
        Completed rendering Sample Header's leaderboard image.

*/