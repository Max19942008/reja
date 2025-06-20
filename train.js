// TASK F

function findDoublers( a) {
  const lw = a.toLowerCase();
  const split = lw.split("");
  const b = split.some((ele,index) => split.indexOf(ele) !== index);
  return b
}


console.log(findDoublers("hello"));
console.log(findDoublers("Bobur"));
console.log(findDoublers("BOBUR"));





// // Deploy Reja projeck link
// http://5.183.11.223:4008/
// // TASK - E
// function reverseString (a) {
//   const split = a.split("");
//   console.log(split);
//   const b = split.reverse();
//   console.log(b);
  
//   const c = b.join("");
//   console.log(c);
// }
// reverseString("Hellowolrd");

//  function reverseString(a) {
//   return a.split("").reverse("").join("")
//  }
//   console.log(reverseString("hello"))



//  // TASK -D
// function checkContent(a, b) {
//   if( typeof a === "string" && typeof b === "string");
//   if(a.length !== b.length) return false
//   const resultA = a.split("").sort().join("");
//   const resultB = b.split("").sort().join("");
//   return resultA === resultB;
//  }
// console.log(checkContent("mitgroup21", "12gmtiprou"));







//TASK -C 
// class Shop {
//   //constructor
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }
  
//   qoldiq() {
//     const time = new Date();
//     const hour = time.getHours();
//     const minute = time.getMinutes();
//     console.log(`hozir ${hour} : ${minute} da ${this.non} ta non, ${this.lagmon} ta lagmon va  ${this.cola} ta cola bor`);
//   }
  
//   sotish(non) {
//     this.non -= non;
//   }
   
//   qabul(cola){
//     this.cola += cola;
//   }
  
// }

// const myShop = new Shop (4, 5, 2);


// myShop.sotish(3);


 
// myShop.qabul(2);
// myShop.qoldiq();


// // MIT Task -B
// function countDigit(a) {
//   const digits = a.split('').filter((ele, index) => {
//     return ele >= '0' && ele <= '9';
//   });
//  console.log("raqamlar:",digits);
//  console.log("raqamlar soni:",digits.length);

// }

// console.log(countDigit("Bobur1994Max2008"));

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba boling ",//0-20
//   "togri boshlik tanlang va koproq xato qiling ",//20-30
//   "ozingizga ishlashinzni boshlang",//30-40
//   "siz kuchli bolgan narsalarni qiling",//40-50
//   "yoshlarga investitsiya qiling",//50-60
//   "endi dam oling,foydasi yoq endi",//60
// ];
// function maslahatBering(a, callback) {
//   if(typeof a !== 'number') callback("insert a number",null);
//   else if(a<=20) callback(null,list[0]);
//   else if (a>20 && a<=30) callback(null,list[1]);
//   else if (a>30 && a<=40) callback(null,list[2]);
//   else if (a>40 && a<=50) callback(null,list[3]);
//   else if (a>50 && a<=60) callback(null,list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     },5000 );
//   }
// }
// console.log("passed here 0");
// maslahatBering( 65, (err, data) => {
//    if (err) console.log("ERROR:",err);
//    console.log("javob:",data);
// }) 
// console.log("passed here 1");



// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba boling ",//0-20
//   "togri boshlik tanlang va koproq xato qiling ",//20-30
//   "ozingizga ishlashinzni boshlang",//30-40
//   "siz kuchli bolgan narsalarni qiling",//40-50
//   "yoshlarga investitsiya qiling",//50-60
//   "endi dam oling,foydasi yoq endi",//60
// ];
//  async function maslahatBering(a) {
//   if(typeof a !== 'number') throw new Error("insert a number");
//   else if(a<=20) return list[0];
//   else if (a>20 && a<=30)  return list[1];
//   else if (a>30 && a<=40)  return list[2];
//   else if (a>40 && a<=50)  return list[3];
//   else if (a>50 && a<=60)  return list[4];
//   else {
    
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
//      resolve(list[5]);
//     },5000); 
//       });

//     // setTimeout(function () {
//     //   callback(null, list[5]);
//     // },5000 );
//   }
// }
// // console.log("passed here 0");
// // maslahatBering(25).then((data) => {
// // console.log("javob:",data);
// // })
// // .catch((err)=>{
// // console.log("ERROR:",err);
// // }); 
// // console.log("passed here 1");

// async function run(){
// let javob = await maslahatBering(25);
// console.log(javob);

// javob = await maslahatBering(70);
// console.log(javob);

// javob = await maslahatBering(41);
// console.log(javob);
// }

// run();