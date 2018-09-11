
db.createUser( { user: "nodebb", pwd: "asdf1234", roles: [ "readWrite" ] } );
db.grantRolesToUser("nodebb",[{ role: "clusterMonitor", db: "admin" }]);
