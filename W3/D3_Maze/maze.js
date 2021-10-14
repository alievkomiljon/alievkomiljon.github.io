$(function(){
    "use strict";

    let isStarted = false;
    let isTouchedTheWalls = false;
    let isFinished = false;

    $('.boundary').mouseover(function(){
        lost();
    });
    $('#maze').mouseleave(function(){
        lost();
    });

    let lost = function(){
        if(!isTouchedTheWalls && !isFinished && isStarted){
            $('.boundary').addClass('youlose');
            isTouchedTheWalls = true;
            isStarted = false;
            alertLost();
        }
    };


    let alertLost = function(){
        setTimeout(alert('Sorry, you lost!'), 100);
        //$('<h2 class="alertheader">Sorry, you lost!<h2>').insertAfter('#status');
    };

    let alertWon = function(){
        alert('You won!\nPress S to start again');
        //$('<h3>You won!\nPress S to start again<h3>').insertAfter('#status');
    };

    $('#end').mouseover(function(){
        if(!isTouchedTheWalls && !isFinished && isStarted){
            alertWon();
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