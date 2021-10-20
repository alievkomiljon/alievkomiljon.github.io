$(() => {
    let textBox = $("#text_box"), form = $("#magic8"),
        btn = $("#btn"), error = $("#error");

    // textBox.keyup(function(event){ 
    //     if(event.keyCode === 13){
    //         form.submit()
    //     }
    // });
    form.submit(() => {
       askQuestion();
       return false;
    });

    function askQuestion(){
        $.get('/8ball',
            {
                contentType: "application/json; charset=utf-8"
            })
            .done((res) => {
                let json = JSON.parse(res);
                textBox.val(json.answer);
                textBox.focus(function () {
                    $(this).select();
                });
                textBox.focus();
            })
            .fail(() => {
                error.removeClass("hidden");
                error.addClass("show");
            });
    }

});