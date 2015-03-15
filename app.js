var Q = require('q');
var requester = require('./core/requester');
var util = require('./util/util');

Q.longStackSupport = true;

//读取用户数据
Q.denodeify(requester.connecting)()
    .then(function(){
        return Q.denodeify(util.readUserData)()
    })
    //执行登录请求
    .then(function(userData){
        return Q.denodeify(requester.login)(userData.userName,userData.password);
    })
    //捕获异常事件
    .catch(function(err){
        if(err){
            console.error(err.stack);
            process.exit(1);
        }
    });