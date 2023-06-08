//let 變數名稱=value 變數名稱開頭不能用數字，但可以用中文、英文、特殊符號當開頭
let a=1; 
//更新變數的值，不用再次宣告變數名稱
a=50;

const b=2;
//b=3 const不能更改變數的值

//undefined 尚未被賦予值
let c;

//null 空值 
let d=123;
//let d=null; //原本有值，但目前用不到

//彈跳視窗
//alert(a); 

console.log(b,a); //emmet log

//查詢類別名稱 
console.log(typeof a); 

//字串轉數字 變數=parseInt("字串")
let age=parseInt("27");
console.log(age+1);

//數字轉字串 變數=變數.toString();
let year=1995;
year=year.toString();
console.log(typeof year)

let myEmail="  ming@gmail.com";
console.log(myEmail);
console.log(myEmail.trim());/* 過濾掉空白的部分 */

let myName="Ming"
// let content="您好;我是"+myName+"我今年"+age+"歲"
let content=`您好我是${myName}我今年${age}歲`;
console.log(content);





