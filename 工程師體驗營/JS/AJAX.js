/* axios 環境安裝 */
console.log(axios); /* 透過console檢查有沒有載入成功，有出現程式碼就代表成功 */
console.log("-----------------------------------------------");


/* ----------------------------------------------------------------- */
/* axios-嘗試串接外部資料 */
/* https://hexschool.github.io/ajaxHomework/data.json */
/*axios.get("https://hexschool.github.io/ajaxHomework/data.json") 
  .then(function (response) { /* .then 回傳時，會執行後面的程式碼 
    console.log(response); 
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  }); */


/* ----------------------------------------------------------------- */ 
/* axios-將外部資料寫入到網頁上 */
/*axios.get("https://hexschool.github.io/ajaxHomework/data.json") 
    .then(function (response) { /* .then 回傳時，會執行後面的程式碼 
        let ary=response.data;
        console.log(ary[0].name);
        const title=document.querySelector(".title"); /* const宣告後不可改變 
        title.textContent=ary[0].name;
    /* 純文字會建議使用textContent會比innerHTML還要合適 

    });*/


/* ----------------------------------------------------------------- */
/* axios-非同步觀念 / 透過函式設計處理非同步 */
let ary=[];

axios.get("https://hexschool.github.io/ajaxHomework/data.json") /* 發出請求給伺服器 */
    .then(function (response) { /* 伺服器回傳才會觸發.then */
        console.log("資料有回傳了"); /* 順序二 */
        ary=response.data;
        renderData(); /* 執行函式renderData */
    });

function renderData(){ /* 註冊函式(要等回傳後，才會觸發執行) */
    console.log(ary); /* 順序三(值已經寫入) */
    const title=document.querySelector(".title");
    title.textContent=ary[0].name;

}

console.log(ary); /* 會跑的比[js:39]的程式碼還要快(還沒回傳) */ /* 順序一(值尚未寫入) */

/* 在還沒回傳之前，JS會優先跑下面的程式碼[js:44、51]，避免有些檔案回傳過大，JS都沒執行值其他程式碼，導致網頁空白一片一段時間 */


/* ----------------------------------------------------------------- */



