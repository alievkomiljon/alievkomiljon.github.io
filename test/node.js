
let quacking = false, flying = false, xPos = 0, yPos = 0;

function takeOff(){
    flying = true;
}

function land() {
    flying = false;
}

function startQuacking() {
    quacking = true;
}

function stopQuacking() {
    quacking = false;
}

function moveTo(x, y) {
    xPos = x;
    yPos = y;
    let msg = "Duck is " + 
    (flying ? `flying to ${x},${y}` : `swimming to ${x},${y}`) +
    (quacking ? " while quacking" : "");
    
    console.log(msg);
}

module.exports = {
    'takeOff' : takeOff,
    'land' : land,
    'startQuacking' : startQuacking,
    'stopQuacking' : stopQuacking,
    'moveTo' : moveTo
};

