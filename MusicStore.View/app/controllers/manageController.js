app.controller('ManageController', ['$scope', '$route', 'appFactory', function ($scope, $route, appFactory) {
    $scope.path = '';

    $scope.actions = {
        // If indicator = 0, show Artist page. Else show Songs page
        includePage: function (indicator) {
            if (indicator == 0) {
                $scope.path = 'app/views/artists.html';
            } else {
                $scope.path = 'app/views/songs.html';
            }
        }
    };

}]);