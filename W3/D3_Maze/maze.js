$(function(){
    "use strict";

    let isStarted = false;
    let isTouchedTheWalls = false;
    let status = $("h2#status");

    $('.boundary').mouseover(function(){
        lost();
    });
    $('#maze').mouseleave(function(){
        lost();
    });

    let lost = function(){
        if(!isTouchedTheWalls && isStarted){
            $('.boundary').addClass('youlose');
            isTouchedTheWalls = true;
            isStarted = false;
            alertLost();
        }
    };


    let alertLost = function(){
        //setTimeout(alert('Sorry, you lost!'), 100);
        status.empty().text("Sorry, you lost! Press S to start again");
    };

    let alertWon = function(){
        //alert('You won!\nPress S to start again');
        status.empty().text("You won! Press S to start again");
    };

    $('#end').mouseover(function(){
        if(!isTouchedTheWalls && isStarted){
            alertWon();
            isStarted = false;
        }
    });

    $('#start').click(function(){
        isTouchedTheWalls = false;
        isStarted = true;
        $('.boundary').removeClass('youlose');
    });


    
});