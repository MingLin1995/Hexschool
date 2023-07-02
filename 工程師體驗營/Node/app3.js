/* 開發自己的package.json */
/* CMD 輸入npm init */

/* {
  "name": "npm-test",  //檔案名稱
  "version": "1.0.0", //版本號
  "description": "", //描述
  "main": "app3.js", //主要執行的檔案
  "scripts": { 
    "test": "echo \"Error: no test specified\" && exit 1"
  }, //有沒有測試的程式碼
  "author": "Ming", //作者是誰
  "license": "ISC" //是否開源
} */

/* --------------------------------------------------------- */
/* 安裝別人的NPM */
/* https://www.npmjs.com/package/express */
/* CMD 輸入npm init */
/* 新增一個全新的package.json */
/* CMD 輸入npm install express --save */
/* npm install express --save 會自動新增模組、複寫package.json(安裝模組並寫入 package.json 的 "dependencies")的NPM */
/* 會多出node_modules資料夾，代表載入模組成功 */

var express=require("express"); /* 載入node_modules內的express模組 */
console.log(express); /* 可以看到所有模組 */

/* npm install express --save-dev 開發測試、除錯用的NPM(安裝模組並寫入 package.json 的 "devDependencies")*/
/* npm install nodemon -g 全域安裝，不會載入node_modules資料，因為會往更底層去查
位址在：C:\Users\林右銘\AppData\Roaming\npm\node_modules  */

/* 安裝套件 npm install nodemon -g */
/* CMD輸入nodemon app3.js 會自動更新現在狀況(類似Go Live) */
console.log("123456");


/* npm list 顯示安裝的 NPM 列表 */
/* npm uninstall [模組名稱]  刪除專案裡的 NPM*/




