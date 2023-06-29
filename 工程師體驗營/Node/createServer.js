/* node.js內建的，所以不用新增http.js的檔案 */
const { log } = require("console");
var http=require("http"); 

/* 開啟web伺服器，執行function */
/* request(請求) 用來接收客戶端的請求資訊 */
/* response(回應) 用來回應客戶端的回應資訊 */
http.createServer(function(request,response){
    /* 回傳使用者的詳細資訊 */
    console.log(request);
    /* 先寫表頭，200代表傳送成功，帶入物件(plain代表回傳文字內容) */
    /*response.writeHead(200,{"Content-Type":"text/plain"});*/
    /* 要寫入的文字 */
    /*response.write("<h1>hello!</h1>");*/

    /* 回傳html格式 */
    response.writeHead(200,{"Content-Type":"text/html"});
     /* 要寫入的文字 */
     response.write("<h1>hello!</h1>");
    
    /* 結束這次的請求 */
    response.end();
}) .listen(8080); /* 監聽一個埠(port) */

/* http://127.0.0.1:8080/ */
