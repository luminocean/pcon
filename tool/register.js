/**
 * 用户注册自己用户名密码信息的程序，一般由外部的bat来调用
 */

var readline = require('readline');
var fs = require('fs');
var path = require('path');

var dataDirPath = path.join(__dirname,'../','data');

//创建data目录（如果没有的话）
if(!fs.existsSync(dataDirPath))
    fs.mkdirSync(dataDirPath);

var userDataPath = path.join(dataDirPath,'user');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("请输入用户名...\n", function(userName) {
    rl.question("请输入密码...\n",function(password){
        saveUserData(userName,password,function(err){
            if(err){
                console.error(err);
                process.exit(1);
            }

            console.log('数据本地保存成功');

            rl.close();
            process.exit(0);
        });
    });
});

function saveUserData(userName,password,callback){
    var encodedUserName = (new Buffer(userName)).toString('base64');
    var encodedPassword = (new Buffer(password)).toString('base64');

    fs.writeFile(userDataPath,encodedUserName+"\n"+encodedPassword,function(err){
        if(err) return callback(err);

        callback();
    });
}