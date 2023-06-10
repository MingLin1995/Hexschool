/* document.getElementById */
/* document.getElementById("titleId").textContent="123"; */

/* 簡化寫法 */
/* var el =document.getElementById("titleId");
el.textContent="1234"; */ /* textContent 更改文字 */


/* --------------------------------------------- */

/* document.querySelector */
/* var el2=document.querySelector("#titleId");
el2.textContent="12345"; */

/* 或是改class樣式 */ 
var el3=document.querySelector(".titleClass em"); 
el3.textContent="強調強調強調";

/* --------------------------------------------- */

var el4=document.querySelectorAll(".titleClass2 em");
console.log(el4); /* 可以發現抓出來的資料是陣列 */
el4[0].textContent="789"; /* 針對單一陣列資料去修改 */

/* 透過迴圈修改全部的資料 */
var el4Len=el4.length;
for(var i=0;i<el4Len;i++){
    el4[i].textContent="編號"+i;
}

/* --------------------------------------------- */
/* setAttribute 增加標籤屬性 */
var el5=document.querySelector(".titleClass3 a");
el5.setAttribute("href","https://www.google.com.tw/");

/* 增加屬性(id)的值(strId) */
/* 透過setAttribute增加id選擇器(可以透過F12去檢查)，再由CSS改變樣式 */
var el6 =document.querySelector(".str");
el6.setAttribute("id","strId");

/* getAttribute 取出屬性的內容 */
/* 取出超連結 */
var el7=document.querySelector(".titleClass3 a").getAttribute("href");
console.log(el7);
/* 取出文字 */
var el8=document.querySelector(".titleClass3 a").textContent;
/* or var el8=document.querySelector(".titleClass3 a").innerHTML; */
console.log(el8);


