/* 載入模組到相對應的路徑 */
var content=require("./data");
/* ./代表同一層 ../代表上一層 */
/* ------------------------ */

/* 第一種載入方法 */
console.log(content);
/* 載入物件 */
console.log(content.title);
/* ------------------------ */

/* 第二種載入方法 */
/* console.log(content.data2); */

/* console.log(content.bark()); */