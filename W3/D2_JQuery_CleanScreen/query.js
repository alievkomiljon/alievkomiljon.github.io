$(function () {
    const minPosition = 5, maxPosition = 95;

    let randomNoGenerator = (min, max) => Math.floor(Math.random() * (max - min) + min);
    let randomColorGenerator = () => Math.floor(Math.random()*16777215).toString(16);

    let circleContainer = $("#circle_container");
    /* -- input fields -- */
    let width = 0,growthAmount = 0, growthRate = 0, numberOfCircle = 0;
    let startBtn = $(".input-elements #start");

    startBtn.click(function(){
        width =  $(".input-elements #width").val();
        growthAmount = $(".input-elements #growth_amount").val();
        growthRate = $(".input-elements #growth_rate").val()
        numberOfCircle = $(".input-elements #number_of_circle").val();

        emptyCircleContainer();
        drawCircles();
        animateCircles();
    });

    function drawCircles(){
        for(let i=0; i<numberOfCircle; i++){
            let top = randomNoGenerator(minPosition, maxPosition) + "%",
                left = randomNoGenerator(minPosition, maxPosition) + "%",
                color = "#" + randomColorGenerator();

            circleContainer.append($("<div>", {
                "id" : "circle-"+i,
                "class": "circle",
                "css": {
                    "top": top, "left": left, "background-color": color,
                    "width": width + "px", "height": width + "px", "border-radius": width + "px",
                    "cursor" : "pointer"
                },
                "click": function (){
                    $(this).hide();
                },
                "mouseenter": function(){
                    if($(this).is(":visible")){
                        $(this).fadeTo(300, 0.1);
                    }
                },
                "mouseleave": function(){
                    if($(this).is(":visible")){
                        $(this).fadeTo(300, 1);
                    }
                }
            }));
        }
    }

    function animateCircles(){
        let interval = setInterval(() =>{
            $('.circle')
                .css({
                    "height": (idx, old) => (parseInt(old) + parseInt(growthAmount)) + "px",
                    "width": (idx, old) => (parseInt(old) + parseInt(growthAmount)) + "px",
                    "border-radius": (idx, old) => (parseInt(old) + parseInt(growthAmount)) + "px"
                });
        }, growthRate);
    }

    function emptyCircleContainer(){
        circleContainer.empty();
    }
});