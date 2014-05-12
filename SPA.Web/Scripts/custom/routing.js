(function ($) {

    var app = Sammy('#main', function () {

        this.get("#/products", function (context) {
            $(".view").hide();
            $("#products").css({ width: '80%' });
            $("#products").show();
            $("#products").animate({ width: '90%' }, 500);
            $("#categories").show();
        });

        this.get("#/products/category/:category", function (context) {
            $(".view").hide();
            $("#productsByCategory").html("");
            GetProductsByCategory(this.params.category);
            $("#productsByCategory").css({ width: '80%' });
            $("#productsByCategory").show();
            $("#productsByCategory").animate({width: '90%'}, 500);
            $("#categories").show();
        });

        this.get("#/categories", function (context) {
            $(".view").hide();
            $("#categories").show();
        });

        this.get("#/products/details/:id", function (context) {
            $(".view").hide();
            $("#product").html("");
            GetProductById(this.params.id);
            $("#product").show();
        });

        $(function () {
            app.run('#/products');
        });
    });
})(jQuery);