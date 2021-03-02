var sec=document.getElementById('sec')
var timer;


function interval(){
 sec=document.getElementById('sec');
 timer=setInterval(()=> {
  if(sec.value >0){
   newVal=sec.value-1;
  }
  sec.value=newVal;
  document.getElementById('panel').innerHTML=sec.value;
  if(sec.value==0){
   clearInterval(timer);
  }
 },1000);
}

function start(){
 var newVal=0;
 interval();
}