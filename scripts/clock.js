function time () {
 var today = new Date();

 let hours = today.getHours();
 let mins=today.getMinutes();
 let seconds=today.getSeconds();
 let session=document.getElementById('session').innerHTML;

 


 document.getElementById('hours').innerHTML=hours;
 document.getElementById('minets').innerHTML=mins;
 document.getElementById('seconds').innerHTML=seconds;









}
setInterval(time);