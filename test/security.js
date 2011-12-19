var http = require("http");
console.log("You have to see 4 errors")
process.on('uncaughtException', function (err) {
  console.log('Caught error 4 : ' + err);
});

// localhost connect
var req = http.request({
        host:"localhost", 
        port:5000, 
        method:"GET",
        path:"/", 
        }, function(res) {
		console.log("SHOULD NOT HAPPEN");
	}
);
req.end();	
// local port open which should fial
try{
var server = new require("net").Server();
server.listen(5000,null,function(){
	
})
}catch(x){
	console.log("Caught error 1 : "+x+" try doing --ports=5000 to make this go away ")
}
// open process
try{
require("child_process").exec("ls -al",function(error, stdout, stderr){
	console.log(error, stderr)
})
}catch(x){
	console.log("Caught error 2 : "+x.message)
}
// open process
try{
require("child_process").spawn("ls",[]);

}catch(x){
	console.log("Caught error 3 : "+x)
}

// load binary module