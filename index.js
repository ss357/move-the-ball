let key;
document.addEventListener("keydown", myFunction)
let ball = document.getElementById("ball");
//ball.style.top="100px";

 function myFunction(Event){
    key=Event.key;
    //  console.log(key);
   
    if(key=='w' || key=="ArrowUp"){
        console.log("up");
        up();
    }
    else if(key=='a'|| key=="ArrowLeft"){
        console.log("left");
       left();
    }
    else if(key=='s'|| key=="ArrowDown"){
        console.log("back");
        down();
    }
    else if(key=='d'|| key=="ArrowRight"){
        console.log("right");
        right();
    }

}

function up(){
    console.log(ball.offsetTop);
    let x= ((ball.offsetTop)-=10)+"px";
    console.log(x);
   if(ball.offsetTop<=10){x="0px"}
 ball.style.top=x;
}

function down(){
    console.log(ball.offsetTop);
    let x= ((ball.offsetTop)+=10)+"px";
    console.log(x);
   if(ball.offsetTop>=550){x="560px"}
 ball.style.top=x;
}

function right(){
    console.log(ball.offsetLeft);
    let x= ((ball.offsetLeft)+=10)+"px";
    console.log(x);
   if(ball.offsetLeft>=1260){x="1260px"}
 ball.style.left=x;
}
function left(){
    console.log(ball.offsetLeft);
    let x= ((ball.offsetLeft)-=10)+"px";
    console.log(x);
   if(ball.offsetLeft<=0){x="0px"}
 ball.style.left=x;
}