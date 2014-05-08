define('dataservice.product',
    ['amplify'],
    function (amplify) {
        var
            init = function () {
                amplify.request.define('products', 'ajax', {
                    url: 'api/products',
                    dataType: 'json',
                    type: 'GET'
                }),
                amplify.request.define('product', 'ajax', {
                    url: 'api/products/{id}',
                    dataType: 'json',
                    type: 'GET'
                })
            },

            getProducts = function (callbacks) {
                return amplify.request({
                    resourceId: 'products',
                    success: callbacks.success,
                    error: callbacks.error,
                    cache: true
                });
            },

            getProduct = function (callbacks, id) {
                return amplify.request({
                    resourceId: 'product',
                    data: { id: id },
                    success: callbacks.success,
                    error: callbacks.error
                });
            };

        init();

        return {
            getProducts: getProducts,
            getProduct: getProduct
        };
    });