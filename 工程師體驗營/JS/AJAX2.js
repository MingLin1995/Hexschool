/* https://github.com/hexschool/nodejs_ajax_tutorial/tree/master */
/* https://github.com/axios/axios#installing */
/* 透過 axios 實做註冊 post 網路請求 */
let obj={
    email: "lovef2etesttest@hexschool.com",
    password: "12345678"
  };

axios.post("https://hex-escape-room.herokuapp.com/api/user/signup", obj)
    .then(function (response) { /* 第一次案註冊，所以會成功，執行then */
    console.log(response); 
    })
    .catch(function (error) { /* 第二次因為重複註冊，所以會失敗，執行catch */
    console.log(error); 
    });
