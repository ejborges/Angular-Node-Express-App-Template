/**
 * Created by ejborges on 10/17/2014.
 */

var express = require('express'),  // uses express version defined in package.json
    app = module.exports = express();// http://socket.io/docs/#using-with-express-3/4
    portNum = 3000; // change to whatever, try to keep the number high though, most other processes use up ports with lower value
                    // if you try to run the server on this port when it is already in use by another operation, you'll get an error: listen EADDRINUSE

app.configure(function() {
    "use strict";
    // http://expressjs.com/3x/api.html#app.use
    app.use(express.bodyParser());  // http://expressjs.com/3x/api.html#bodyParser
    app.use(express.methodOverride());
    app.use(express.static(__dirname + '/app'));
    app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

app.listen(portNum, function () {
    "use strict";
    console.log("Express server listening on port %d in %s mode.",
        this.address().port, app.settings.env);
});