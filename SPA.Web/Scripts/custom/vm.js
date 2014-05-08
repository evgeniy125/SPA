var app = Sammy('#main', function () {

    this.get('/#', function () {
        var uri = '../api/products';

        $.getJSON(uri).done(function (data) {
            $.each(data, function (key, item) {
                $('<p>', { text: item['Name'] }).appendTo($('#main'));
            });
        })
    });
    
    this.get('/#details/:productId', function () {
        //load some data

    });
});


app.run('/#');