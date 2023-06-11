/* document.getElementById */
/* document.getElementById("titleId").textContent="123"; */

/* 簡化寫法 */
/* var el =document.getElementById("titleId");
el.textContent="1234"; */ /* textContent 只能單純放"文字" */


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


/* --------------------------------------------- */
/* 操控HTML的方法，innerHTML*/
/* textContent只能單純放"文字"，若要新增標籤，就要使用innerHTML */
var el9=document.querySelector(".main");
var str="<h1 class='blue'>1234</h1>"; /* 外層用雙引號，內層就要用單引號 */
el9.innerHTML=str+str; /* 會清空原來的值，將賦予的值覆蓋上去 */

/* innerHTML字串的組合 */
var el10=document.querySelector(".list");
var link="https://www.google.com.tw/";
var name="谷哥";
el10.innerHTML="<li><a href=' "+link+" '> "+name+" </a></li>"
/* 小技巧，最外層是""，所以要新增變數時直接補上 "+變數+"  即可*/

/* --------------------------------------------- */
var farms=[
    {
        farmer:"卡斯柏",
        dogs:["詹姆士","龐德"],
    },
    {
        farmer:"查理",
        dogs:["皮皮"],
    }
];

var el11=document.querySelector(".list2");
var farmLen=farms.length;
var str="";
for(var i=0;i<farmLen;i++){
    var content="<li>"+farms[i].farmer+"</li>";
    /*el11.innerHTML=content; innerHTML會覆蓋之前資料，所以只會有查理 */
    str+=content; /* 透過字串累積每次執行迴圈的所有內容 */
    /* console.log(str);  確定字串都會累積*/
}
el11.innerHTML=str;

/* --------------------------------------------- */
/*操控HTML的方法，createElement*/
var str2=document.createElement("em"); /* 增加標籤元素 */
str2.textContent="多增加的字" /* 增加標籤內的文字 */
str2.setAttribute("class","pink"); /* 增加屬性 */

/* 增加標籤<h1>的子節點 appendChild (將em標籤放入h1標籤內) */
document.querySelector(".title").appendChild(str2); /* appendChild跟innerHTML的差異，不會覆蓋之前的文字資料， */

var farms2=[
    {
        farmer:"卡斯柏",
        dogs:["詹姆士","龐德"],
    },
    {
        farmer:"查理",
        dogs:["皮皮"],
    }
];

var el12=document.querySelector(".list3"); /* 先簡化讀取的程式碼 */
console.log(el12);
var framLen2= farms2.length;
for(var i=0; i<framLen2;i++){
    var str3=document.createElement("li");/* 增加標籤 */
    str3.textContent=farms2[i].farmer;
    el12.appendChild(str3); /* 不會覆蓋，所以不用利用字串累加 */
} 









