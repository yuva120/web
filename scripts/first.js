//mathamatical operatpors
let x=5;
let y=8;
 let  add=x+y;
 let sub=x-y;
 let mul=x*y;
 let div=x/y;
 let modulus=x%y;
 console.log(add,sub,mul,div,modulus);

 //comparision operators
 console.log(x>y,x<y,x==y,x!=y,x>=y,x<=y);

 //logical  operators
// and operator
 let age=14;
 if(age>=13 && age<=18){
    console.log(`your are a "teenager"`)
 }
 else if(age>=19 && age<=26){
    console.log(`you are an "adult"`)
 }
 else{
    console.log(`your are not teenager or adult`)
 }

 //or operators
 let num=8;
 let num1=4;
 console.log(num>num1||num<num1);

 //logical not operator
 console.log(!(num>num1&&num<num1) );

 //ternary
 let result=(x>y)?"true":"false";
 console.log(result);
 
 //incriment and decriment
 let a=5;
 console.log(a++); //5
 console.log(++a); //7
 console.log(a--); //7
 console.log(--a); //5
 console.log(a);

 //switch case
 let day=6;
    switch (day) {
        case  day=0:
          console.log("monday");
      break;
        case day=1:
            console.log("tuesday");
        break;   
        case day=2:
            console.log("wednesday");    
        break;
        case day=3:
            console.log("thursday");
            break;
            case day=4:
                console.log("friday");
                break;
            case day=6:
                console.log("saturday");
            break;
            case day=7:
                console.log("sunday");       
          default:
                console.log("something write to get wrong");
    }
    
 
for loop

 let n=1;
for(n=1; n<=10; n++){
     console.log(n++)
 }
// //reverse 10 to 1 num
// let i=10;
// for(i=10; i>=1;i--){
//     console.log(i--)
// }

// //while loop
// let num3=1;
// while(num3<=10){
//     console.log(num3++);
// }
// let num4=10
// while(num4>=1){
//     console.log(num4--);
// }
// let g=11;
// do{
//     console.log(g++);
// }while(g<=20)

// //odd and even num count
// let numbers = 7;

// if(numbers % 2 == 0){
//     console.log("even number")
// }else{
//     console.log("odd number")
// }

// //for in loop
// let person ={
//     name: "bhargav",
//     age: 23,
//     position: "developer",

// }
// for(let key in person)
// {
//     console.log(key, person[key]);
 // }

//for of loop
let data=[9,8,7,5,4,2,1]

for(let n of data){
    console.log(n,data[1])
}

//for each loop
let mul=[34,60,50,69]

mul.forEach((n)=>{
    console.log(n*2)
});


const R= Math.random(6);
console.log(R);

let today = new Date();
console.log(today);
 let dd = today.getDate();
 console.log(dd)