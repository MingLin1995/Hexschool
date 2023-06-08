// 等於：==  不等於：!=  嚴謹模式：=== !==
let a=1;
let b="1";
console.log(a==b); //會顯示true，因為==會協助轉型別
console.log(a!=b); //會顯示false，因為!=會協助轉型別
console.log(a===b); //會顯示false，因為===會判斷型別
console.log(a!==b); //會顯示true，因為!===會判斷型別

console.log("------------------------------");

//邏輯運算子 同時滿足：&&    滿足其中之一個條件:||
let c=1;
let d=2;
console.log(c==1 && d==3);
console.log(c==1 || d==3);

console.log("------------------------------");

//陣列[] →同類型資料只要定義(colors)一次就好
let colors=["blue","red","pink"];
let myLikeColor=colors[2];
console.log(myLikeColor);
console.log("共有"+colors.length+"筆資料");

//陣列寫入資料
colors[4]="black";
console.log(colors); //因為沒有定義[3]的資料，所以是空值

console.log("------------------------------");

// 新增 unshift(前)、push(後) 刪除 shift(前)、pop(後)
colors.unshift("yellow");//新增到最前面
colors.push("green"); //新增到最後面
console.log(colors);
colors.pop(); //刪除最後面
console.log(colors);

//指定刪除空白值
colors.splice(4,1); //第一個數字，代表起始位置 //第二個數字，代表往後刪除幾筆資料
console.log(colors);

console.log("------------------------------");

//物件
let motherName="mary";
let fatherName="tom";
let dogs=3;

let home={
    motherName:"mary",
    fatherName:"tom",
    dogs:3,
    isWakeUp:false
};
//新增物件
home.bortherName="kid";

let borther=home.bortherName
console.log(borther); //console.log(home.bortherName)=console.log(home['bortherName'])
//修改物件值
home.dogs+=1;
//刪除物件值
delete home.fatherName;
console.log(home.fatherName);







