/* https://nodejs.org/api/path.html */
/* 載入路徑處理模組 */
var path=require("path"); 

/*找出檔案的資料夾目錄路徑(可以參考app2.js) */ 
console.log(path.dirname("Path/aaa/bbb.js")); 

/*join 路徑合併(類似字串相加) */
console.log(path.join(__dirname,"/bbb.js")); 

/*basename 抓檔名 */
console.log(path.basename("/Path/aaa/bbb.js")); 

/*extname 抓副檔名 */
console.log(path.extname("/Path/aaa/bbb.js")); 

/*parse 分析路徑 */
console.log(path.parse("/Path/aaa/bbb.js")); /* 回傳物件 */

