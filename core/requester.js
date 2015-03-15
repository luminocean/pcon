var request = require('request');
var util = require('../util/util');

exports.login = function(userName,password,callback){
    var requestObj = {
        "url":"http://p.nju.edu.cn/portal/portal_io.do",
        "method":"POST",
        "form":{
            action:'login'
        }
    };
    requestObj.form.username = userName;
    requestObj.form.password = password;

    request(requestObj,function (err, response, body) {
        if(err) return callback(err);
        console.log(body);
        callback();
    });
}