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
 

 
