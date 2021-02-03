const http=require("http");  //외부 모듈 임포트 방법 
const os=require("os");

console.log("weberver starting...");

var handler=function(request, response){
    console.log("Received request from "+request.connection.remoteAddress);
    response.writeHead(200);
    response.end(`<h1>Cloud MSA Course :  ${os.hostname()} </h1>`);
};

var wwww = http.createServer(handler);

wwww.listen(3000); //리스너 : 클라이언트로부터 요청받는 대표 포트 --> 다른 thread 포트로 옮겨준다 

