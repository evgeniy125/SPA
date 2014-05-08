define('dataservice.category',
    ['amplify'],
    function (amplify) {
        var
            init = function () {
                amplify.request.define('categories', 'ajax', {
                    url: 'api/categories',
                    dataType: 'json',
                    type: 'GET'
                })
            },

            getCategories = function (callbacks) {
                return amplify.request({
                    resourceId: 'categories',
                    success: callbacks.success,
                    error: callbacks.error
                });
            };

        init();

        return {
            getCategories: getCategories
        };
    });