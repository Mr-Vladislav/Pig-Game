var activePlayer, totals, current, gameON, winner, ime1, ime2, b;
function init(){
    activePlayer=0;
    totals=[0,0];
    current=0;
    gameOn=true;
    ime1="Player 1";
    ime2="Player 2";
    b=0;   
    document.querySelector(".player-0-score").innerHTML=0;
    document.querySelector(".player-1-score").innerHTML=0;
    document.querySelector(".current-0-score").innerHTML=0;
    document.querySelector(".current-1-score").innerHTML=0;
    document.querySelector(".player-0-plate").classList.remove("active");
    document.querySelector(".player-1-plate").classList.remove("active");
    document.querySelector(".player-0-plate").classList.add("active");
    document.querySelector(".player-0").classList.remove("winner");
    document.querySelector(".player-1").classList.remove("winner");
    document.querySelector(".player-0").innerHTML=ime1;
    document.querySelector(".player-1").innerHTML=ime2;
    document.querySelector(".image").style.display="none";
    //document.querySelector(".image2").style.display="none";
}

init();

document.querySelector('.new-game').addEventListener("click",init);
document.querySelector('.roll').addEventListener("click",function(){
    if(gameOn){
    var dice;    
    var a= Math.ceil(Math.random()*6);
    if(b===a && a===6){
        totals[activePlayer]=0;
        current=0;
    document.querySelector(".player-"+activePlayer+"-score").innerHTML=totals[activePlayer];
    document.querySelector(".current-" + activePlayer + "-score").textContent=current;
    document.querySelector(".player-0-plate").classList.toggle("active");
    document.querySelector(".player-1-plate").classList.toggle("active");
    document.querySelector(".image").style.display="none";
    //document.querySelector(".image2").style.display="none";
    activePlayer===0? activePlayer=1 : activePlayer=0;
}   
    else{
    dice=a;
    b=a;
    //var dice2=Math.ceil(Math.random()*6);
    if(dice>1 /*&& dice2>1*/ ){
    current+=dice//+dice2;
    document.querySelector(".image").src="dice-"+dice+".png";
    //document.querySelector(".image2").src="dice-"+dice2+".png";
    document.querySelector(".image").style.display="block";
    //document.querySelector(".image2").style.display="block";
    document.querySelector(".current-" + activePlayer + "-score").textContent=current;
    }
    else{
    current=0;
    b=0;
    document.querySelector(".current-" + activePlayer + "-score").textContent=current;
    document.querySelector(".player-0-plate").classList.toggle("active");
    document.querySelector(".player-1-plate").classList.toggle("active");
    document.querySelector(".image").style.display="none";
    //document.querySelector(".image2").style.display="none";
    activePlayer===0? activePlayer=1 : activePlayer=0;
    }
}
}
})
document.querySelector('.hold').addEventListener("click",function(){
    if(gameOn){
    totals[activePlayer]+=current;
    current=0;
    b=0;
    document.querySelector(".current-0-score").innerHTML=0;
    document.querySelector(".current-1-score").innerHTML=0;
    document.querySelector(".player-"+activePlayer+"-score").innerHTML=totals[activePlayer];
    document.querySelector(".image").style.display="none";
    //document.querySelector(".image2").style.display="none";
    var input = document.querySelector('.final-score').value;
    if(input) {
        winner = input;
    } else {
        winner = 20;
    }
    if(totals[activePlayer]>=winner){
        document.querySelector(".player-"+activePlayer).classList.add("winner");
        document.querySelector(".player-"+activePlayer).innerHTML="WINNER"
        gameOn=false;
    }else{
        activePlayer===0? activePlayer=1 : activePlayer=0;
        document.querySelector(".player-0-plate").classList.toggle("active");
        document.querySelector(".player-1-plate").classList.toggle("active");
    }
    }
})