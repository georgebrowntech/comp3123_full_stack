var os=require('os');


function getSysteminfo(){

    var cpus=JSON.stringify(os.cpus());
    var hostname=os.hostname();
    var osname=os.platform();
    return [cpus,hostname,osname]


}

function getUserinfo(){

    var uname=os.userInfo().username;
    var homedir=os.userInfo().homedir;
    var uid=os.userInfo().uid;
    return [uname,homedir,uid]

}


module.exports={
    getSysteminfo:getSysteminfo,
    getUserinfo:getUserinfo
}