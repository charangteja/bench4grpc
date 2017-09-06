const grpc = require('grpc');
const {grpcProto,port} = require('../config');
var client = new grpcProto.Auth('localhost:'+port,grpc.credentials.createInsecure());
class Join {
    constructor({username,uid,avatar,timestamp}) {
        this.username = username;
        this.uid = uid;
        this.avatar = avatar;
        this.timestamp = timestamp || new Date().getTime()
    }
}
const join = new Join({
    username:Math.random() + '',
    uid:'xx',
    avatar:'xxx',
});
setTimeout(function(){
    console.log('begin request');
    for(var i=0;i<100000;i++) {
        client.doCheck(join, function(err, response) {
            console.log(err,'result:', response);
        });
    }
},5000);