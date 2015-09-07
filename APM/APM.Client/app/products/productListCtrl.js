(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl",
                     ["productResource",
                         ProductListCtrl]);

    function ProductListCtrl(productResource) {
        var vm = this;
        vm.products = productResource.query({
            $filter: "startswith(ProductCode,'GDN') and Price lt 10",
            $skip:0, $top:3}, function (data) {
            return data;



        })
        
    }
}());