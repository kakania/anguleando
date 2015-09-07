(function () {
    "use strict";

    var app = angular.module("common.services")
                      .factory("currentUser",
                               [currentUser]);

    function currentUser() {
        var profile = {
            IsLoggedIn: false,
            username:"",
            token:""
        };
        var setProfile = function (username, token) {
            profile.username = username;
            profile.token = token;
            profile.isLoggedIn = true;
        };
        var getProfile = function () {
            return profile;
        };

        return {
            setProfile: setProfile,
            getProfile:getProfile
        }
    }

}());