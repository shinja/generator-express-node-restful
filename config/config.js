var path = require( "path" ),
rootPath = path.normalize( __dirname + "/.." ),
env = process.env.NODE_ENV || "development";

var config = {
    development: {
        root: rootPath,
        app: {
            name: "server"
        },
        port: 3000,
        db: "mongodb://localhost/server-development"
    },

    test: {
        root: rootPath,
        app: {
            name: "server"
        },
        port: 3000,
        db: "mongodb://localhost/server-test"
    },

    production: {
        root: rootPath,
        app: {
            name: "server"
        },
        port: 3000,
        db: "mongodb://localhost/server-production"
    },

    evennode: {
        root: rootPath,
        app: {
            name: "server" 
        },
        port: 3000,
        db: "mongodb://app_1068:app_1068@evennode.com/server-evennode"
    }
};

module.exports = config[env];
