(function () {
    "use strict";

    angular.module("common.services")
                      .factory("placeResource",
                               ["$resource",
                                "appSettings",
                                placeResource]);

    function placeResource($resource, appSettings) {
        return $resource(appSettings.serverPath + "/api/places/:placeId", null,
            {
                'update':{method:'PUT'}
            });
    }

}());