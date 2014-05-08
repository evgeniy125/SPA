var uri = '../api/products';

$.getJSON(uri).done(function (data) {
    $.each(data, function (key, item) {
        $('<p>', { text: item['Name'] }).appendTo($('#main'));
    });
})