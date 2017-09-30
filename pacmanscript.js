//0 empty, 1 coin, 2 brick, 3 cherry
var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,2,2,2,1,1,2],
    [2,1,1,2,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,1,1,2],
    [2,1,1,2,1,3,1,0,0,2,2,0,0,0,2,2,0,0,1,3,1,2,1,1,2],
    [2,1,1,0,1,1,1,0,0,2,0,0,0,0,0,2,0,0,1,1,1,0,1,1,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,1,1,0,1,1,1,0,0,2,0,0,0,0,0,2,0,0,1,1,1,0,1,1,2],
    [2,1,1,2,1,3,1,0,0,2,2,0,0,0,2,2,0,0,1,3,1,2,1,1,2],
    [2,1,1,2,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,1,1,2],
    [2,1,1,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,2,2,2,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
]
var score={
    p1: 0,
    p2: 0
}
var pac1={
    x: 1,
    y: 1
}
var pac2={
    x: 23,
    y: 1
}
var dgho={
    x: 13,
    y: 8
}
console.log(score.p1);
console.log(score.p2);

function winning(){
    alert("Winner, Winner, Chicken Dinner!")
    if(score.p1>score.p2){
        document.getElementById("winner").innerHTML = "<h3>Player 1 Wins!!</h3><h4>Refresh the browser to play again.</h4>";
    }
    else if(score.p2>score.p1){
        document.getElementById("winner").innerHTML = "<h3>Player 2 Wins!!</h3><h4>Refresh the browser to play again.</h4>";
    }
    else if(score.p2=score.p1){
        document.getElementById("winner").innerHTML = "<h3>It's a Tie!!</h3><h4>Refresh the browser to play again.</h4>";
    }
}
showPacman();
showMrsPacman();
showWorld();
function showWorld(){
    var htmlString="";
    for (var i=0; i<world.length; i++){
        htmlString+="<div class='row'>";
        for(var j=0; j<world[i].length; j++){
            if(world[i][j]==3){
                htmlString+="<div class='cherry'></div>";
            }
            if(world[i][j]==2){
                htmlString+="<div class='brick'></div>";
            }
            if(world[i][j]==1){
                htmlString+="<div class='coin'></div>";
            }
            if(world[i][j]==0){
                htmlString+="<div class='empty'></div>";
            }
        }
        htmlString+="</div>";
    }
    document.getElementById("world").innerHTML = htmlString;
}
function showPacman(){
    document.getElementById("pacman").style.top = 10+pac1.y*20+"px";
    document.getElementById("pacman").style.left = 10+pac1.x*20+"px";
}
function showMrsPacman(){
    document.getElementById("mrspacman").style.top = 10+pac2.y*20+"px";
    document.getElementById("mrspacman").style.left = 10+pac2.x*20+"px";
}
function showScore1(){
    document.getElementById("scoreboard1").innerHTML = score.p1;
}
function showScore2(){
    document.getElementById("scoreboard2").innerHTML = score.p2;
}

setInterval(function(){
    var num=(Math.floor(Math.random()*4));
    if(pac1.x==dgho.x && pac1.y==dgho.y){
        document.getElementById("pacman").style.visibility = "hidden"; 
    }
    if(pac2.x==dgho.x && pac2.y==dgho.y){
        document.getElementById("mrspacman").style.visibility = "hidden"; 
    }
    if(num===0 && world[dgho.y-1][dgho.x] != 2){
        dgho.y--;
    }
    if(num===1 && world[dgho.y+1][dgho.x] != 2){
        dgho.y++
    }
    if(num===2 && world[dgho.y][dgho.x-1] != 2){
        dgho.x--;
    }
    if(num===3 && world[dgho.y][dgho.x+1] != 2){
        dgho.x++;
    }
    document.getElementById("dancingghost").style.top = 10+dgho.y*20+"px";
    document.getElementById("dancingghost").style.left = 10+dgho.x*20+"px";
}, 150);

document.onkeydown = function(event){
    //w:87 a:65 s:83 d:68  up:38 left:37 down: 40 right:39
    if(event.keyCode == 87 && world[pac1.y-1][pac1.x] != 2){
        pac1.y--;
        document.getElementById("pacman").style.transform = "rotate(90deg)";   
    }
    else if(event.keyCode == 83 && world[pac1.y+1][pac1.x] != 2){
        pac1.y++;
        document.getElementById("pacman").style.transform = "rotate(270deg)";    
    }
    else if(event.keyCode == 65 && world[pac1.y][pac1.x-1] != 2){
        pac1.x--;  
        document.getElementById("pacman").style.transform = "rotate(0deg)";  
    }
    else if(event.keyCode == 68 && world[pac1.y][pac1.x+1] != 2){
        pac1.x++;  
        document.getElementById("pacman").style.transform = "rotate(180deg)"; 
    }
    if(world[pac1.y][pac1.x]==1){
        world[pac1.y][pac1.x] = 0;
        score.p1+=10;
        showScore1();
    }
    else if(world[pac1.y][pac1.x]==3){
        world[pac1.y][pac1.x] = 0;
        score.p1+=50;
        showScore1();
    }
    if(event.keyCode == 38 && world[pac2.y-1][pac2.x] != 2){
        pac2.y--; 
        document.getElementById("mrspacman").style.transform = "rotate(90deg)"; 
    }
    else if(event.keyCode == 40 && world[pac2.y+1][pac2.x] != 2){
        pac2.y++; 
        document.getElementById("mrspacman").style.transform = "rotate(270deg)";  
    }
    else if(event.keyCode == 37 && world[pac2.y][pac2.x-1] != 2){
        pac2.x--;   
        document.getElementById("mrspacman").style.transform = "rotate(0deg)";
    }
    else if(event.keyCode == 39 && world[pac2.y][pac2.x+1] != 2){
        pac2.x++;   
        document.getElementById("mrspacman").style.transform = "rotate(180deg)"; 
    }
    if(world[pac2.y][pac2.x]==1){
        world[pac2.y][pac2.x] = 0;
        score.p2+=10;
        showScore2();
    }
    else if(world[pac2.y][pac2.x]==3){
        world[pac2.y][pac2.x] = 0;
        score.p2+=50;
        showScore1();
    }
    if (score.p1+score.p2==1700){
        winning();
    }
    showPacman();
    showMrsPacman();
    showWorld();
}



