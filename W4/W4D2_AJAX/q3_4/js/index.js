$(() => {
    $("#add").submit(() => {
        let data = {name: $("#add input[name=name]").val(),
                    price: $("#add input[name=price]").val()};
        console.log(data);
        $.post("/addToCart", {
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done((res) => {
            let json = JSON.parse(res);
            $(".message-div").empty()
                .text('Success!! Added to the cart.')
                .addClass('success')
                .removeClass('error');
                top.location.href="/cart"; //redirection to Cart
        }).fail(() => {
            $(".message-div").empty()
                .text('Error!! Cannot add to the cart.')
                .addClass('error')
                .removeClass('success');
        });
        return false;
    });
});