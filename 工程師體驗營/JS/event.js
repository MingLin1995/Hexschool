/* 告知你當下元素資訊 */
var el=document.querySelector(".btn");
el.onclick= function(e){  /* onclick 滑鼠點擊時執行 */
    /*alert("Hello!"); 跳出提示(警告) 對話視窗 */
    console.log(e); /* 隨便帶入一個值，就可以知道event的資訊 */
}


/* ------------------------------ */
/*  addEventListener - 事件監聽 */
var el2=document.querySelector(".btn2");
/* addEventListener(選擇事件,代入匿名function,false) */
/* 監聽，click有沒有去執行function */
el2.addEventListener("click", function(e){alert("Hello");}, false);


/* ------------------------------ */
/* onclick(不能同時綁定兩個以上事件，只會讀取最後一個)與addEventListener(可以綁定兩個以上的事件)的差異 */
var elOn=document.querySelector(".btn3");
elOn.onclick=function () {
    alert("on-1");
    
};
elOn.onclick=function () {
    alert("on-2");
    
};

var elAdd=document.querySelector(".btn4");
elAdd.addEventListener("click",function(){alert("add-1")},false);
elAdd.addEventListener("click",function(){alert("add-2")},false);


/* ------------------------------ */
/* false（事件氣泡-Event Bubbling）：從指定元素往外找（預設） */
/* ture（事件捕捉-Event Capturing）：從最層往內找到指定元素 */

var el3=document.querySelector(".box");
el3.addEventListener("click",function(){
    alert("點到box");
    console.log("印出box");
},false); /* 跟body重疊，所以也會觸發body的動作 */

var el4=document.querySelector(".body");
el4.addEventListener("click",function(){
    alert("點到body");
    console.log("印出body");
},false);


/* ------------------------------ */
/* stopPropagation - 中止冒泡事件(只執行一次，其他都不執行) */
var el5=document.querySelector(".box2");
el5.addEventListener("click",function(e){
    e.stopPropagation(); /* 就不會往上找上一層的東西 */
    alert("點到box");
    console.log("印出box");
},false);


/* ------------------------------ */
/* preventDefault - 取消預設觸發行為(取消默認行為) */
var el6=document.querySelector(".link");
el6.addEventListener("click",function(e){
    /* 取消元素的默認行為，原本點連結會轉跳到指定網頁(還是會跳出點擊到BODY) */
    e.preventDefault();
    /* 只執行指定元素，其他行為都不執行(不會跳出點擊到BODY)*/
    e.stopPropagation();
    console.log("test");
},false);

/* ------------------------------ */
/* e.target - 了解目前所在元素位置 */
/* 是點到ul、li還是a標籤? */
var el7=document.querySelector(".header");
el7.addEventListener("click",function(e){
    e.preventDefault(); /* 不會跳到最上面 */
    e.stopPropagation(); /* 不會點到BODY */
    console.log(e.target); /* target可以從e裡面去查詢 */
    console.log(e.target.nodeName); /* 可以從target裡面去查詢 */
},false);


