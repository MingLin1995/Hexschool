/* 練習一 */
let mingStatus={
    name:"Ming",
    age:"27",
    status:"" /* 還沒測量所以不知道溫度 */
}

mingStatus.degree=36.5; /* 實際測量(增加degree的資料) */
console.log(mingStatus);

if(mingStatus.degree>=37.5){
/*     console.log("您不得進入");
 */    mingStatus.status="您不得進入" /* 結果寫入狀態列 */
}else{
/*     console.log("您可以進入");
 */    mingStatus.status="您可以進入" /* 結果寫入狀態列 */
}

console.log(mingStatus.status);
console.log("----------------------------");

/* 練習二 */
let peopleStatus=[
    {
        people:"001",
        age:"27",
        status:"",
    },
    {
        people:"002",
        age:"30",
        status:"",
    }
]

peopleStatus[0].degree=36.5; /* 賦予一個degree=36.5的資料 */
console.log(peopleStatus[0]);

if (peopleStatus[0].degree>=37.5){
    peopleStatus[0].status="您不得進入"
    console.log("您不得進入")
}else{
    peopleStatus[0].status="您可以進入"
    console.log("您可以進入")
}
console.log(peopleStatus[0]); /* 檢查status狀態確實有被寫入 */




