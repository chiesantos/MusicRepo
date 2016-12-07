app.controller('SongController', ['$scope', '$route', 'appFactory', function ($scope, $route, appFactory) {
    $scope.songList = {};
    $scope.songDTO = {};
    $scope.artists = {};
    $scope.isAdding = false;
    $scope.isEditMode = false;

    $scope.initialize = function () {
        $scope.actions.getAll();
        $scope.actions.getAllArtist();
    }

    $scope.actions = {
        getAll: function () {
            var promise = appFactory.getSongsInView();
            promise.then(function (data) {
                $scope.songList = data;
            });
        },

        getAllArtist: function () {
            var promise = appFactory.getArtists();
            promise.then(function (data) {
                $scope.artists = data;
                console.log(data);
            });
        },

        submit: function () {
            if ($scope.isAdding) {
                var promise = appFactory.createSong($scope.songDTO);
                promise.then(function (data) {
                    alert("Song Added!");
                    $scope.actions.getAll();
                    $scope.songDTO = {};

                });
            } else {
                var promise = appFactory.updateSong($scope.songDTO);
                promise.then(function (data) {
                    alert("Song Updated!");
                    $scope.actions.getAll();
                    $scope.songDTO = {};
                });
            }

            $scope.actions.getAll();
            $scope.songDTO = {};
        },

        showAddFields: function () {
            $scope.isAdding = true;
            $scope.isEditMode = false;
            $scope.songDTO = {};
        },

        editMode: function (id) {
            appFactory.getSongById(id).then(function (data) {
                $scope.songDTO = data;
            });

            $scope.isAdding = false;
            $scope.isEditMode = true;
        }
    };
}]);