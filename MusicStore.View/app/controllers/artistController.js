app.controller('ArtistController', ['$scope', '$route', 'appFactory', function ($scope, $route, appFactory) {
    $scope.artistList = {};
    $scope.artistDTO = {};
    $scope.errorPrompt = "";
    $scope.successPrompt = "";
    $scope.isAdding = false;
    $scope.isEditMode = false;

    $scope.initialize = function () {
        $scope.actions.getAll();
        $("#success-alert").hide();
        $("#error-alert").hide();
    }

    $scope.actions = {
        getAll: function () {
            var promise = appFactory.getArtists();
            promise.then(function (data) {
                $scope.artistList = data;
            });
        },

        submit: function () {
            var validateResult = $scope.validate();

            if (validateResult != "") {
                $scope.errorPrompt = "Please fill-out the required fields: " + validateResult;
                $("#success-alert").hide();
                $("#error-alert").alert();
                $("#error-alert").fadeTo(2000, 500);
            } else {
                if ($scope.isAdding) {
                    var promise = appFactory.createArtist($scope.artistDTO);
                    promise.then(function (data) {
                        $scope.artistDTO = {};
                        $scope.actions.getAll();
                        $scope.successPrompt = "Adding successful!";
                    });
                } else {
                    var promise = appFactory.updateArtist($scope.artistDTO);
                    promise.then(function (data) {
                        $scope.successPrompt = "Updating successful!";
                        $scope.actions.getAll();
                    });
                }

                // Success alert
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
            $scope.artistDTO = {};
        },

        editMode: function (id) {
            appFactory.getArtistById(id).then(function (data) {
                $scope.artistDTO = data;
            });

            $("#error-alert").hide();
            $scope.isAdding = false;
            $scope.isEditMode = true;
        }
    };

    $scope.validate = function () {
        var errorMessage = "";

        if ($scope.artistDTO.Name == "" || $scope.artistDTO.Name == undefined) {
            errorMessage += "Artist Name ,";
        }

        if ($scope.artistDTO.Classification == "" || $scope.artistDTO.Classification == undefined) {
            errorMessage += "Classification."
        }

        return errorMessage;
    }

    

}]);