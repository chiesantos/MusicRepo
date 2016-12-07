app.controller('ListsController', ['$scope', '$route', 'appFactory', function ($scope, $route, appFactory) {
    $scope.artists = {};
    $scope.artistDTO = {};
    $scope.songDTO = {};
    $scope.songsByArtist = {};

    $scope.initialize = function () {
        $scope.actions.get();
    };

    $scope.actions = {
        get: function () {
            var promise = appFactory.getArtists();
            promise.then(function (data) {
                $scope.artists = data;
                console.log($scope.artists);
            });
        },

        getSongsByArtist: function (id) {
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
                    alert("Deleted");
                    this.get();
                });
            });
        },

        deleteSong: function (id) {
            appFactory.getSongById(id).then(function (data) {
                $scope.songDTO = data;
                $scope.songDTO.Enable = false;

                appFactory.updateSong($scope.songDTO).then(function (data) {
                    $scope.actions.getSongsByArtist(2);
                });
            });
        }
    };
}]);