var request = require('request');

exports.login = function(userName,password,callback){
    var requestObj = {
        "url":"http://p.nju.edu.cn/portal/portal_io.do",
        "method":"POST",
        "timeout":10000,
        "form":{
            action:'login'
        }
    };
    requestObj.form.username = userName;
    requestObj.form.password = password;

    request(requestObj,function(err, response, body) {
        if(err) return callback(err);
        console.log(body);
        callback();
    });
};

/**
 * 不断连接指定url直到得到响应
 * @param callback
 */
exports.connecting = function(callback) {
    var requestObj = {
        "url": "http://p.nju.edu.cn",
        "timeout": 10000
    };

    var maxRetryTimes = 20;
    var counter = 0;

    //开始连接
    connect(requestObj);

    function connect(requestObj){
        request(requestObj, function(err) {
            if (err) {
                counter++;
                console.log('连接失败，尝试重新连接...');
                //console.error(err);

                if(counter == maxRetryTimes){
                    return callback(new Error('尝试连接数超过上限，连接失败'))
                }else{
                    setTimeout(function(){
                        connect(requestObj);
                    },3000);
                }
            }else{
                return callback();
            }
        });
    }
};