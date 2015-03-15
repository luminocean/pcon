var requester = require('./core/requester');
var util = require('./util/util');

util.readUserData(function(err,userName,password){
    if(err) return console.error(err);

    requester.login(userName,password,function(err){
        if(err){
            console.error(err);
            process.exit(1);
        }
    });
});

