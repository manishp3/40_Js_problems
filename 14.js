// // // const person={
// // //     name:"Manish",
// // //     age:20,

// // //     introduce:function(){
// // //         return `hi my name is ${this.name} and age is ${this.age}`
// // //     }
// // // }

// // // const student=Object.create(person);
// // // student.studentId=101;
// // // console.log(student.name);
// // // console.log(student.age);
// // // console.log(student.studentId);
// // // console.log(student.introduce());
// // // // console.log(person.name);

// // function chekcDivision(num){
// //   let sum=0,last=0;
// //   while(num>0){
// //     last=num%10;
// //     sum+=last;
// //     num/=10
// //   }
// //   let s1=Math.ceil(sum)
// //   console.log(sum);
// //   if(s1%2==0){
// //     return "oddish"
// //   }
// //   else{
// //     return "Evenish"
// //   }
// // }

// // console.log(chekcDivision(234));

// // function checkString(str){
// //     let check=str.length;
// //     if(check%2==0){
// //         return str
// //     }
// //     else{
// //         return str.split('').reverse().join('')
// //     }
// // }

// // console.log(checkString("Manish ke m6j"))

// // function grocerry(prd,qty,price){
// //     let tot=0
// //     for(i=0;i<prd.length;i++){
// //         console.log("Product :" +prd[i]);
// //         console.log("quantity :" +qty[i]);
// //         console.log("price :" +price[i]);
// //         console.log("total:" +(qty[i]*price[i]));
// //         tot+=qty[i]*price[i]
// //     }
// //     return tot

// // }

// // let prod=["milk","chocolate","pizza"]
// // let qty=[2,10,5]
// // let price=[50,2,200]

// // console.log(grocerry(prod,qty,price));

// // console.log(checkDig(arr));
// // function checkDig(num) {
// //   let i = 0,
// //     j = 0,
// //     m;
// //   for (i of num) {
// //     if (i > 10) {
// //       for (m of divide[i]) {
// //         if (m == 7) {
// //           return "Boom...";
// //         }
// //       }
// //       if (m !== 7) {
// //         return "There is no 7 in array by inner";
// //     }
// //     break;
// //     }
// //     console.log(i);
// //     if (i == 7) {
// //       return "Boom...";
// //     }
// //   }
// //   if (i !== 7) {
// //     return "There is no 7 in array";
// //   }
// // }

// // function divide(num) {
// //   let a = [],
// //     last = 0,
// //     rev = 0;
// //   while (num > 0) {
// //     last = num % 10;
// //     rev = last;
// //     a.push(rev);
// //     num /= 10;
// //   }
// //   return a;
// // }

// // checkSEven(arr);
// // function checkSEven(no) {
// //   for (num of no) {
// //     if (num.toString().includes("7")) {
// //   console.log("BOOM");
// //     } else {
// //       console.log("there is no 7");
// //     }
// //   }
// // }
// // let arr = [5, 4, 4, 2, 1, 78, 9];]

// // cosnt words=str.split(' ').filter(word =>word.tolowerCase()==='zero' || word.tolowerCase()==='one' )
// // function findType(str) {
// //   let v = "",
// //     c = "";

// //   Array.from(str).forEach((word) => {
// //     if (word == ["a", "e", "o", "u", "i"]) {
// //       v += word;
// //     } else {
// //       c += word;
// //     }
// //   });
// //   console.log("Vovels :" + v);
// //   console.log("Constant :" + c);
// // }

// // findType("Hello kem 60");
// // for (i = 0; i < str.length; i++)
// // if (str[i] == ["a", "e", "o", "u", "i"]) {
// //   v += str[i];
// // } else {
// //   c += str[i];
// // }

// checkDays(2,2023)

// function isLepaYear(year){
//     return (year%4===0 && year %100!==0) || year%400===0;
// }
// function checkDays(mon,yr){
//     if(mon===2){
//         return isLepaYear(yr) ? 29 :28;
//     }
//     else if ([4,6,9,11].includes(mon)){
//         return 30;
//     }
//     else return 31;
// }

// console.log(checkDays(6,2016));

