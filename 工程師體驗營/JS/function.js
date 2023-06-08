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
function a(num,num2) {
    console.log(num,num2);
    console.log(num);
    console.log(num2);
}

a(1,2);
console.log("--------------------");
a(6,7);

