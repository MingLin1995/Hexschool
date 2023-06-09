/* 機器人→早起活動→起床、刷牙、洗臉、出門 */
/* 此段語法不會被執行 */
function morningAction(){
    console.log("起床");
    console.log("刷牙");
    console.log("洗臉");
    console.log("出門");
} 
/* 機器人→晚上活動 */ 
function nightAction(){
    console.log("回家");
    cleanHead(); /* function中包function */
    console.log("睡覺");
} 
function cleanHead(){
    console.log("刷牙");
    console.log("洗臉");
}
/* 執行語法 */
morningAction(); 
console.log("--------------------");
nightAction();
console.log("--------------------");



/* 參數 */
function a(numm1,numm2) {
    console.log(numm1,numm2);
    console.log(numm1);
    console.log(numm2);
}
a(1,2); 
console.log("--------------------");
a(6,7);
console.log("--------------------");
/* 參數只會存活在，function內，所以沒辦用log印出參數，若要帶出來要用return */
/* console.log(num); */


/* 透過函式寫出兩個數字相加工具 */
function add(num1,num2){
    console.log(`您加總的數字為${num1+num2}`); 
    /* 最外層要用 ` 反引號，再透過 ${}插入表達式*/
}
add(2,3);
add(154,48968);
console.log("--------------------");


/* return 回傳值的運用 */
function calcTotalScore(chineseScore,mathScore){
    /* console.log(chineseScore+mathScore); */
    return chineseScore+mathScore; /* 資料回傳到變數mingTotalScore */
    
    /* 第一次return後會中斷執行function */
    let totalScore=chineseScore+mathScore; 
    return totalScore;
    
}

let mingTotalScore=calcTotalScore(60,80); /* 資料傳送到上方function */
let timTotalScore=calcTotalScore(80,90);
console.log(`Ming的總分為${mingTotalScore}`); /* 印出變數 */
/* console.log(totalScore);  會發生錯誤，因為function的參數只會存在{}內*/
console.log("--------------------");


/* 多個return的用法 */
/* 檢查學生成績是否及格的函式 */
function checkScore(score){
    if(score>=60){
        return "及格";
    }else{
        return "不及格";
    }
}
let mingScore= checkScore(80);
console.log(mingScore);
let markScore= checkScore(40);
console.log(markScore);
console.log("--------------------");


/* 判斷是否為偶數 小步測試 反覆驗證 從簡單的寫到難的 */

/* 基本的判斷 */
/* let myInput= 4;
let checkNumber=myInput%2==0;
console.log(checkNumber);

if(checkNumber){
    console.log("是偶數");
}else{
    console.log("不是偶數");
} */

/* 使用function判斷 */
let count=0

function checkNumber(input){
    count+=1;
    if (input%2==0){
/*         console.log("是偶數"); */
        return "是偶數";
    }else{
/*         console.log("不是偶數"); */
        return "不是偶數";
    }
}

/* 一般輸出 */
/* checkNumber(11);
checkNumber(10); */

/* 透過回傳值輸出 */
let checkSevenNumber=checkNumber(11);
console.log(checkSevenNumber);
let checkEightNumber=checkNumber(10);
console.log(checkEightNumber);

/* 紀錄總共計算幾次 */
console.log(`您一共計算了${count}次`);
console.log("--------------------");




