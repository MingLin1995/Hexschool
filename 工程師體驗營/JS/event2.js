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
/* 計算的程式碼，用GPT產生的，非該章節重點 */
function calculatePrice() {
    // 獲取輸入框中的值
    /* parseInt字串轉整數(string(字串), radix(預設為0，取到小數點第n位)); */
    var burgerQuantity = parseInt(document.getElementById("burgerInput").value);
    var cokeQuantity = parseInt(document.getElementById("cokeInput").value);

    // 計算總價
    var burgerPrice = 50;
    var cokePrice = 20;
    var totalPrice = burgerPrice * burgerQuantity + cokePrice * cokeQuantity;

    // 顯示總價
    document.getElementById("totalPrice").innerHTML = "總價：" + totalPrice + "元";
  }

/* blur - 離開焦點時進行事件觸發 (若沒輸入數值會跳出警告) */
function checkContent(e){
    var str= e.target.value; /* 查出文字欄位的值 */
    if(str==""){ /* 若欄位為空字串，就跳出警示 */
        alert("此欄位不可為空")
    }
}
var el1=document.getElementById("totalPrice");
el1.addEventListener("chick",totalPrice,false);

/* focus 所在焦點(點擊到焦點，會產生出focus事件) */
/* blur 離開焦點 (離開焦點的時候，會觸發blur事件) */

var ham=document.getElementById("burgerInput");
ham.addEventListener("blur",checkContent,false);

var coke=document.getElementById("cokeInput");
coke.addEventListener("blur",checkContent,false);


/* ----------------------------------- */
/* mousemove - 當滑鼠滑入指定內容時觸發 */
var el2 =document.querySelector(".box");
el2.addEventListener("mousemove",function () {
    alert("碰到綠色了");
},false)
/* 小遊戲 */
var el3=document.querySelectorAll(".boxgame");
var len2=el3.length;
for(var i=0;i<len2;i++){
    el3[i].addEventListener("mousemove",function(e){
        alert("你輸了");
    },false);
};


/* ----------------------------------- */
/* 網頁座標 - 了解 screen、page、client 箇中差異 */
// 獲取座標訊息顯示在網頁上
function showCoordinates(event) {
    var coordinatesDiv = document.getElementById('coordinates');
    
    // 獲取滑鼠位置訊息
    /* screen是看整個螢幕解析度 */
    var screenX = event.screenX;
    var screenY = event.screenY;
    /* page是以網頁框架寬高去計算(有設定寬高才會有差) */
    var pageX = event.pageX;
    var pageY = event.pageY;
    /* client是以瀏覽器視窗寬高去計算 */
    var clientX = event.clientX;
    var clientY = event.clientY;
    
    // 將座標及時顯示在網頁上
    coordinatesDiv.innerHTML = 
    'Screen: (' + screenX + ', ' + screenY + ')<br>' +
    'Page: (' + pageX + ', ' + pageY + ')<br>' +
    'Client: (' + clientX + ', ' + clientY + ')';
  }
  
// 監聽滑鼠移動事件
document.addEventListener('mousemove', showCoordinates);


/* ----------------------------------- */
/* 事件監聽優化篇 - 從父元素來監聽子元素內容 */
//點擊li，讓console顯示裡面的文字
var list2=document.querySelector(".list2"); /* (".list2 li") 只能監聽到父元素 */
list2.addEventListener("click",checkName,false)
function checkName(e){
    /*console.log(e.target.nodeName); test 確定會點到li */

    /* 會發現點擊到ul範圍會出現全部，所以要透過return去回傳空值來中斷程式碼 */
    if(e.target.nodeName !== "LI"){return} /* 透過nodeName回傳值得知是大寫的LI */
    /* 透過篩選，點到LI以外的ul、h、a標籤就都不會有反應了 */

    console.log(e.target.textContent); /* 只會出現查理，因為querySelector 只會撈第一筆資料，所以要監聽到整個父元素 */
}






