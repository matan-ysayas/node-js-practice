// let nameArray=["matan","lior","may","avi","bob"];

// for(let i=0;i<nameArray.length;i++){
//     console.log(nameArray[i])
// }
let numberArray = [];
for (let i = 0; i < 16; i++) {
  numberArray.push(Math.floor(Math.random() * 10));
}
// for(let i=0;i<numberArray.length;i++){
//    if(numberArray[i]%2==0){
//        console.log(numberArray[i]);
//    }
//     }(

const fs = require("fs");

// fs.writeFile('./myFile.txt',"matan",()=>{});

// for (let i = 1; i < 15; i++) {
//   fs.writeFile("./myFile.txt", numberArray.toString(), () => {});
// }
// fs.readFile("./myFile.txt", (err, result) => {
//   if (err) throw err;
//   console.log(result.toString());
// });


// let names = ["matan", "lior", "avi", "yosi"];

// fs.writeFile("./names.txt", names.toString(), () => {});

// fs.readFile("./names.txt", (err, result) => {
//   if (err) throw err;
//   let nameArray = result.toString().split(",");
//   nameArray.forEach((name) => {
//     if (name[0] == "a") console.log(name);
//   });
// });



// let num = [];
// for (let i = 0; i < 12; i++) {
//   num.push(Math.floor(Math.random() * 101));

// }

// console.log(num);

//     fs.writeFile("./numbers.txt", num.filter((num)=>num%3==0).toString(), () => {});

// fs.readFile("./numbers.txt", (err, result) => {
//   if (err) throw err;
//   let nameArray = result.toString().split(",");
//   nameArray.forEach((num) => {
//     if (parseInt(num)>50) console.log(num);
//   }); 
// });

const util=require('util');
const writeFilePromise=util.promisify(fs.writeFile);



// const EventEmitter=require('events');

// class MyEventClass extends EventEmitter {}

// const myEvent=new MyEventClass();

// myEvent.on('hello',()=>{
//     console.log("hello there");
// })

// myEvent.emit('hello')


// myEvent.on('PrintName',(data)=>{
//     console.log("hello there",data);
// })

// myEvent.emit('PrintName',"bobi")

// const myEvent=require('./MyEventClass');

// myEvent.emitPrintNow('hello bob');

// myEvent.emitDoNow();
// myEvent.emitDoNow();
// myEvent.emitDoNow();

// myEvent.emitPrintNames(3);

//---------------------------------------10--------------------------
// const myEvent2=require('./myEventClass2');
//  myEvent2.emitListening();

 //-------------------------------11----------------------

//  const myEvent3=require('./EventClass11');
//  myEvent3.emitFileName("myfffile.txt");
 //--------------------------------12---------------
//  const myEvent4=require('./EventClass12');
//  myEvent4.emitCreate('./matan.txt','matan hgever')

 //-------------------------------13---------------

//  const myEvent5=require('./EventClass13');
// myEvent5.emitPrintNames(["matan","marcos","haim"])

//----------------------------------14-----------
const myEvent6=require('./EventClass14')
myEvent6.emitPrintNum([25,6,66,99,758,5,12])