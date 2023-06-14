/* change - 表單內容更動內容時觸發 */
var area=document.getElementById("areaId");
var list=document.querySelector(".list");
var country=[
    {
        farmer:"Ming",
        place:"潭子區"
    },
    {
        farmer:"Tim",
        place:"北屯區"
    },
    {
        farmer:"Steve",
        place:"北屯區"
    }
];

var len=country.length;
/* console.log(len); 測試功能，長度是否有正確顯示*/

function updateList(e){
/*     alert("test") 測試功能，變更資料後有被觸發*/    
    var select=e.target.value;
/*     console.log(select); 測試功能，可以找到對應的值 */
    var str="";
    for(var i=0;i<len;i++){
        /*console.log(country[i].farmer); 測試功能，可以正常照出姓名*/
        if(select == country[i].place){ /* 選到哪一區，就對應出哪裡的人 */
            str+= "<li>"+country[i].farmer+"</li>"
        }
    }
    /* console.log(str); 測試功能，字串有正確累積 */
    list.innerHTML=str;/* 寫入ul標籤內 */
};

/* change 下拉式選單"變更資料"就會觸發change事件 */
area.addEventListener("change",updateList,false);


/* ----------------------------------- */
/* keyCode - 點擊鍵盤，射發火箭！ */
var body=document.body;
function goRocket(e) {
    console.log(e.keyCode);/* 可以查詢案哪個案件代表哪個code */
    switch (e.keyCode) { /* 找到匹配的值，就會執行該區塊的程式碼 */
        case 97: /* 按數字1 */
            document.querySelector(".rocket-1").style.bottom="2000px";
            break;
        case 98: /* 按數字2 */
            document.querySelector(".rocket-2").style.bottom="2000px";
            break;
        case 99: /* 按數字3 */
            document.querySelector(".rocket-3").style.bottom="2000px";
            break;
    
    }
    
}
body.addEventListener("keydown",goRocket,false) /* 按下按鍵會執行goRocket的動作 */


/* ----------------------------------- */
/* blur - 離開焦點時進行事件觸發 */
