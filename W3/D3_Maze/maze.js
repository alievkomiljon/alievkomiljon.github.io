$(function(){
    let isStarted = false;
    let isTouchedTheWalls = false;
    let isFinished = false;

    $('.boundary').mouseover(function(){
        if(!isTouchedTheWalls && !isFinished && isStarted){
            $('.boundary').addClass('youlose');
            isTouchedTheWalls = true;
            isStarted = false;
            alertLost();
        }
    });
    $('#maze').mouseleave(function(){
        if(!isTouchedTheWalls && !isFinished && isStarted){
            $('.boundary').addClass('youlose');
            isTouchedTheWalls = true;
            isStarted = false;
            alertLost();
        }
    });


    let alertLost = function(){
        setTimeout(alert('Sorry, you lost!'), 100);
    }

    $('#end').mouseover(function(){
        if(!isTouchedTheWalls && !isFinished && isStarted){
            alert('You won!\nPress S to start again');
            isFinished = true;
            isStarted = false;
        }
    });

    $('#start').click(function(){
        isTouchedTheWalls = false;
        isStarted = true;
        isFinished = false;
        $('.boundary').removeClass('youlose');
    });


    
});