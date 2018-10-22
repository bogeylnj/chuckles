# importing into app (see `get-image.js`)
> Run example `node get-image.js`
-or-
```
const LeaderboardImage = require('./LeaderboardImage');

new LeaderboardImage().getImage("data/june-map.json", "Sample Header", "<PathToImage>");
```

# Running from command line
## Build HTML page from data set

> `npm run build-dom <dataPath> <serverName> <serverImage>`

> e.g., `$ npm run build-dom data/june-map.json "Server Of Awesomeness" "http://cat.com/cat.gif"`


## Then, render the HTML page as a PNG

> `npm run render`


## Stat category labels and visibility now configurable
> `resources/stats.confg` contains a json map defining `hidden` data and `labels` to use for Title text
