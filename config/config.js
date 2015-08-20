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
    }
};


if (process.env.APP_CONFIG) {

    var db = JSON.parse(process.env.APP_CONFIG);
    config[env].db = "mongodb://" + db.mongo.user + ":app_1068@" + 
                    db.mongo.host + ":" + db.mongo.port + "/" + db.mongo.db;
}

module.exports = config[env];
