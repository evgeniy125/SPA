define('binder',
    ['jquery', 'ko', 'config', 'vm'],
    function ($, ko, config, vm) {
        var
            ids = config.viewIds,

            bind = function () {
                ko.applyBindings(vm.products, getView(ids.products));
            },

            getView = function (viewName) {
                return $(viewName).get(0);
            };
    });