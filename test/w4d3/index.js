const myJSON = `[
    {
        "id": "1",
        "cpu": "8 core 4Ghz",
        "ram": "16GB",
        "storage": "4TB NVME",
        "price": "$1500"
    },
    {
        "id": "2",
        "cpu": "8 core 4Ghz",
        "ram": "8GB",
        "storage": "4TB NVME",
        "price": "$1300"
    },
    {
        "id": "3",
        "cpu": "8 core 3.2Ghz",
        "ram": "32GB",
        "storage": "4TB NVME",
        "price": "$1800"
    }
]`;


$(() => {
    $("button").click(function () {
        $.get(myJSON, { "id": $(this).text() })
            .done(function (data) {
                $("#cpuSpeed").text(data.cpu);
                $("#ramAmount").text(data.ram);
                $("#storage").text(data.storage);
                $("#price").text(data.price);
            });
    });
});

