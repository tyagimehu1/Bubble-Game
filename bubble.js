var timer=30;
var score=0;
var hit=0;

function addScore(){
  score += 10;
  document.querySelector("#scorevalue").textContent=score;
}

function makebubble(){
  var set_bubble="";
  for(var i=1;i<=171;i++){
    set_bubble +=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
  }
  document.querySelector("#panelbottom").innerHTML=set_bubble;
}

function startTimer(){
  var time_int=setInterval(function(){
    if(timer>0){
      timer--;
      document.querySelector("#timevalue").textContent=timer;
    }
    else{
      clearInterval(time_int);
      document.querySelector("#panelbottom").innerHTML=`<h1 style="font-size: 100px;"><b>GAME OVER</b></h1><h1>Your Score:${score}</h1>`; 
      
    }
    
  },1000);
}

function getHit(){
  hit=Math.floor(Math.random()*10);
  document.querySelector("#hitvalue").textContent=hit;
}

document.querySelector("#panelbottom").addEventListener("click",function(details){
  var bubble_digit=Number(details.target.textContent);
  if(bubble_digit===hit){
    addScore();
    makebubble();
    getHit();
  }

});

getHit();
startTimer();
makebubble();
