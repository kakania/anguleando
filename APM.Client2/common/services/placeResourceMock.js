(function () {
    "use strict";

    var app = angular.module("placeResourceMock",
                             ["ngMockE2E"]);

    app.run(function ($httpBackend) {
        var places = [
 {
     "placeId": 1,
     "name": "Lake District",
     "productCode": "GDN-0011",
     "releaseDate": "March 19, 2009",
     "description": "Leaf rake with 48-inch handle.",
     "isPremiumSite": true,
     "price": 19.95,
     "location": "garden",
     "tags": ["leaf", "tool"],
     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
 },
 {
     "placeId": 5,
     "name": "Aberdeen",
     "productCode": "TBX-0048",
     "releaseDate": "May 21, 2013",
     "description": "Curved claw steel hammer",
     "isPremiumSite": false,
     "price": 8.99,
     "location": "toolbox",
     "tags": ["tool"],
     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
 },
 {
     "productId": 15,
     "name": "Brixton Leisure Centre",
     "productCode": "TBX-0048",
     "releaseDate": "May 21, 2013",
     "description": "Curved claw steel hammer",
     "isPremiumSite": true,
     "price": 8.99,
     "location": "toolbox",
     "tags": ["tool"],
     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
 }];
        var placeUrl = "/api/places";
        $httpBackend.whenGET(placeUrl).respond(getAllPlacesMocked);

        var editingRegex = new RegExp(placeUrl + "/[0-9][0-9]*", '');

        $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
            var place = { "placeId": 0 };

            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];
            if (id > 0) {
                for (var i = 0; i < places.length; i++) {
                    if (places[i].placeId == id) {
                        place = places[i];
                        break;
                    }
                }
            }
            return [200, place, {}];
        });

        $httpBackend.whenPOST(placeUrl).respond(function (method, url, data) {
            var place = angular.fromJson(data);
            if (!place.placeId) {

                place.placeId = places[places.length - 1].placeId + 1;
                places.push(place);

            }
            else {
                for (var i = 0; i < places.length; i++) {
                    if (places[i].pplaceId == place.placeId) {
                        places[i] = place;
                        break;
                    }
                }
            }

            return [200, place, {}];
        });

        $httpBackend.whenGET(/app/).passThrough();

        function getAllPlacesMocked(method, url, data) {
            return [200, places, {}];
            //return products;
        }

    })

}());