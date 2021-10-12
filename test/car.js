let CAR=(function(){
    let speed=0;
    let direction=0;
    function gasPaddle(){
    if(speed+5>120)speed=120;
    else speed+=5;
    }
    function break1(){
    if(speed>=5)speed-=5;
    else speed=0;
    }
    function turnLeft(degree){
    direction-=degree;
    }
    function turnRight(degree){
    direction+=degree;
    }
    function status(){
    console.log("The car is driving direction " + direction + " at " + speed + "mph");
    }
    return {
    gasPaddle:gasPaddle,
    break:break1,
    turnLeft:turnLeft,
    turnRight:turnRight,
    status:status
    }
    })();