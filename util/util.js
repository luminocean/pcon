var fs = require('fs');
var path = require('path');

var userDataPath = path.join(__dirname,'../','data/user');

/**
 * 从文件中读取用户信息,解码后返回
 * @param callback
 */
exports.readUserData = function(callback){
    fs.readFile(userDataPath,function(err,data){
        if(err) return callback(err);

        var pieces = data.toString().split('\n');
        var userName = new Buffer(pieces[0],'base64');
        var password = new Buffer(pieces[1],'base64');
        callback(null,{
            "userName":userName,
            "password":password
        });
    });
};