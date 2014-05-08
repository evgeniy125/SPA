define('dataservice',
    [
        'dataservice.product',
        'dataservice.category'
    ],
    function (product, category) {
        return {
            product: product,
            category: category
        };
    });