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
/* Event Bubbling、Event Capturing */
