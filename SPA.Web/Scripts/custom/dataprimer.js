define('dataprimer',
    ['ko', 'datacontext', 'config'],
    function (ko, datacontext, config) {
        var fetch = function () {
            return $.Deferred(function (def) {
                var data = {
                    products: ko.observable(),
                    categories: ko.observable()
                };

                $.when(
                    dataContext.products.getData({ results: data.products }),
                    dataContext.categories.getData({ results: data.categories })
                    )
                .fail(function () { def.reject(); })
                .done(function () { def.resolve(); });
            }).promise();
        };

        return {
            fetch: fetch
        };
    });