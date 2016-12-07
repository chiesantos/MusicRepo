app.controller('ArtistController', ['$scope', '$route', 'appFactory', function ($scope, $route, appFactory) {
    $scope.artistList = {};
    $scope.artistDTO = {};
    $scope.errorPrompt = "";
    $scope.isAdding = false;
    $scope.isEditMode = false;

    $scope.initialize = function () {
        $scope.actions.getAll();
        //$("#successAlert").hide();
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
            } else {
                if ($scope.isAdding) {
                    var promise = appFactory.createArtist($scope.artistDTO);
                    promise.then(function (data) {
                        
                        $("#successAlert").alert();
                            $("#successAlert").fadeTo(2000, 500).slideUp(500, function () {
                                $("#successAlert").slideUp(500);
                            });
                        $scope.actions.getAll();
                        $scope.artistDTO = {};

                    });
                } else {
                    var promise = appFactory.updateArtist($scope.artistDTO);
                    promise.then(function (data) {
                        alert("Artist Updated!");
                        $scope.actions.getAll();
                        $scope.artistDTO = {};
                    });
                }

                $scope.actions.getAll();
                $scope.artistDTO = {};
            }
        },

        showAddFields: function () {
            $scope.isAdding = true;
            $scope.isEditMode = false;
            $scope.artistDTO = {};
        },

        editMode: function (id) {
            appFactory.getArtistById(id).then(function (data) {
                $scope.artistDTO = data;
            });

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