var data1=2;

/* 第一種載入方法 */
/*module.exports=data1;*/

/* 也可以提供物件供載入 */
module.exports={ 
    content:data1,
    title:"title"
};
/* ------------------------ */

/* 第二種載入方法 */
/* exports.data2=22; */

/* 載入function */
/*exports.bark=function(){
    return "bark!!";
}*/

/* 第一種方法跟第二種方法不能共存！！！ */