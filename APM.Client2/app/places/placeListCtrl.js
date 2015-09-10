(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("PlaceListCtrl",
                    ["placeResource",
                     PlaceListCtrl]);

    function PlaceListCtrl(placeResource) {
        var vm = this;
        vm.title = "Placements";
        placeResource.query(function (data) {
            vm.placements = data;
        });
        vm.showImage = false;

    }
}());