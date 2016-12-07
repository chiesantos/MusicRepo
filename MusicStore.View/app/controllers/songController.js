app.controller('SongController', ['$scope', '$route', 'appFactory', function ($scope, $route, appFactory) {
    $scope.songList = {};
    $scope.songDTO = {};
    $scope.artists = {};
    $scope.isAdding = false;
    $scope.isEditMode = false;
    $scope.successPrompt = "";
    $scope.errorPrompt = "";

    $scope.initialize = function () {
        $scope.actions.getAll();
        $scope.actions.getAllArtist();
        $("#success-alert").hide();
        $("#error-alert").hide();
    }

    $scope.actions = {
        getAll: function () {
            var promise = appFactory.getSongsInView();
            promise.then(function (data) {
                $scope.songList = data;
            });
        },

        getAllArtist: function () {
            var promise = appFactory.getActiveArtists();
            promise.then(function (data) {
                $scope.artists = data;
            });
        },

        submit: function () {
            var validateResult = $scope.validate();
            
            if (validateResult != "") {
                $scope.errorPrompt = "Please fill-out the required fields: " + validateResult;

                // Validation prompt
                $("#success-alert").hide();
                $("#error-alert").alert();
                $("#error-alert").fadeTo(2000, 500);
            } else {
                if ($scope.isAdding) {
                    var promise = appFactory.createSong($scope.songDTO);
                    promise.then(function (data) {
                        $scope.songDTO = {};
                        $scope.actions.getAll();
                        $scope.successPrompt = "Adding successful!";
                    });
                } else {
                    var promise = appFactory.updateSong($scope.songDTO);
                    promise.then(function (data) {
                        $scope.actions.getAll();
                        $scope.successPrompt = "Updating successful!";
                    });
                }

                // Success alert
                $scope.successPrompt = "Updating successful!";
                $("#error-alert").hide();
                $("#success-alert").alert();
                $("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
                    $("#success-alert").slideUp(500);
                });
            }
        },

        showAddFields: function () {
            $("#error-alert").hide();
            $scope.isAdding = true;
            $scope.isEditMode = false;
            $scope.songDTO = {};
        },

        editMode: function (id) {
            appFactory.getSongById(id).then(function (data) {
                $scope.songDTO = data;
            });

            $("#error-alert").hide();
            $scope.isAdding = false;
            $scope.isEditMode = true;
        }
    };

    $scope.validate = function () {
        var errorMessage = "";

        if ($scope.songDTO.Title == "" || $scope.songDTO.Title == undefined) {
            errorMessage += "Song title ,";
        }

        if ($scope.songDTO.ArtistID == "" || $scope.songDTO.ArtistID == undefined) {
            errorMessage += "Artist. "
        }

        return errorMessage;
    }
}]);