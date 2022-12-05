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
    
    //for loop
    let n=10;
   for(let n=0;n<=10;n++){
     console.log(n);
   }

   // while loop
   let i= 0;
while (i<3) {
  i++;
}
console.log(i);

 //do-while loop
 let number=0;
do {
  i+=1;
    
} while (number>0&&number<5){
  number--;
}
  console.log(number);

  //for each
  const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));

 //for in-loop
 const object={a:1,b:2,c:3};
for (const property in object) {
  console.log(`${property}: ${object[property]}`);

 }

 //for of-loop
 const array=['p','q','r'];
  for (const element of array) {
    console.log(element);
  }

 

 
