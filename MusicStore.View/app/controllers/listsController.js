app.controller('ListsController', ['$scope', '$route', 'appFactory', function ($scope, $route, appFactory) {
    $scope.artists = {};
    $scope.artistDTO = {};
    $scope.songDTO = {};
    $scope.songsByArtist = {};

    $scope.initialize = function () {
        $scope.actions.get();
        $("#success-alert").hide();
        $("#modal-success-alert").hide();
    };

    $scope.actions = {
        get: function () {
            var promise = appFactory.getActiveArtists();
            promise.then(function (data) {
                $scope.artists = data;
                console.log($scope.artists);
            });
        },

        getSongsByArtist: function (id) {
            $scope.globalChosenArtist = id;
            var promise = appFactory.getSongsByArtistId(id);
            promise.then(function (data) {
                $scope.songsByArtist = data;
                console.log($scope.songsByArtist);
            });
        },

        deleteArtist: function (id) {
            appFactory.getArtistById(id).then(function (data) {
                $scope.artistDTO = data;
                $scope.artistDTO.Enable = false;

                appFactory.deleteArtist($scope.artistDTO).then(function (data) {
                    $("#success-alert").alert();
                    $("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
                        $("#success-alert").slideUp(500);
                    });
                    $scope.actions.get();
                });
            });
        },

        deleteSong: function (id) {
            appFactory.getSongById(id).then(function (data) {
                $scope.songDTO = data;
                $scope.songDTO.Enable = false;

                appFactory.deleteSong($scope.songDTO).then(function (data) {
                    $("#modal-success-alert").alert();
                    $("#modal-success-alert").fadeTo(2000, 500).slideUp(500, function () {
                        $("#modal-success-alert").slideUp(500);
                    });
                    $scope.actions.getSongsByArtist($scope.globalChosenArtist);
                });
            });
        }
    };
}]);