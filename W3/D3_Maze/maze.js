$(function(){
    let isTouchedTheWalls = false;
    let isFinished = false;

    $('.boundary').mouseover(function(){
        if(!isTouchedTheWalls && !isFinished){
            $('.boundary').addClass('youlose');
            isTouchedTheWalls = true;
            alertLost();
        }
    });
    $('#maze').mouseleave(function(){
        if(!isTouchedTheWalls && !isFinished){
            $('.boundary').addClass('youlose');
            isTouchedTheWalls = true;
            alertLost();
        }
    });


    let alertLost = function(){
        setTimeout(alert('Sorry, you lost!'), 100);
    }

    $('#end').mouseover(function(){
        if(!isTouchedTheWalls && !isFinished){
            alert('You won!\nPress S to start again');
            isFinished = true;
        }
    });

    $('#start').click(function(){
        isTouchedTheWalls = false;
        $('.boundary').removeClass('youlose');
    });


    
});