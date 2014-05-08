(function () {
    var root = this;

    define3rdPartyModules();
    boot();

    function define3rdPartyModules() {
        define('jquery', [], function () { return root.jQuery; });
        define('ko', [], function () { return root.ko; });
        define('amplify', [], function () { return root.amplify; });
        define('underscore', [], function () { return root._ });
    }

    function boot() {
        require(['bootstrapper'], function (bs) { bs.run(); });
    }
})();