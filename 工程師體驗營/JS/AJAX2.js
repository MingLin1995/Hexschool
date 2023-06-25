/* https://github.com/hexschool/nodejs_ajax_tutorial/tree/master */
/* https://github.com/axios/axios#installing */
/* 透過 axios 實做註冊 post 網路請求 */
/* function callSingUp() {
  let obj={
    email: "lovef2etesttest@hexschool.com",
    password: "12345678"
  };

  axios.post("https://hex-escape-room.herokuapp.com/api/user/signup", obj)
    .then(function (response) { /* 第一次案註冊，所以會成功，執行then 
    console.log(response); 
    })
    .catch(function (error) { /* 第二次因為重複註冊，所以會失敗，執行catch 
    console.log(error); 
    });
  
} */

/* ----------------------------------------------------- */
/* 實做 axios DOM 表單註冊流程 */
const account=document.querySelector(".account");
const password=document.querySelector(".password");
const send=document.querySelector(".send");
/* console.log(account,password,send); test*/

send.addEventListener("click",function(e){
  /* console.log("點擊成功"); test*/
  callSingUp();
})

function callSingUp() {
  
  /* 若輸入的值為空字串，就自動彈跳出警告，用return中斷後續程式碼 */
  if (account.value=="" || password.value==""){
    alert("請填寫正確資訊")
    return; /* 中斷後續程式碼 */
  }

  let obj={}; /* 要讓輸入的帳號、密碼帶入，所以用空字串 */
  obj.email=account.value;
  obj.password=password.value;
  /* console.log(obj); test*/

  axios.post("https://hex-escape-room.herokuapp.com/api/user/signup", obj)
    .then(function (response) { /* 第一次案註冊，所以會成功，執行then */
      if(response.data.message=="帳號註冊成功"){
        alert("恭喜註冊成功！"); /* 使用彈跳視窗顯示註冊成功 */
      }else{
        alert("帳號註冊失敗，帳號重複！");
      }
      
      /* 不管結果如何，都將網頁資料清除 */
      account.value="";
      password.value="";
    })
    .catch(function (error) { /* 第二次因為重複註冊，所以會失敗，執行catch */
      console.log(error); 
    });
  
}