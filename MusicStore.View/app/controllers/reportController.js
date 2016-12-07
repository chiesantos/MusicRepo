app.controller('ReportController', ['$scope', '$route', 'appFactory', function ($scope, $route, appFactory) {
    var url = "http://localhost:42064/";

    $scope.generateReport = function () {
        var NewTab = window.open(url + "ViewReport.aspx", '_blank');
        NewTab.focus();
    }

}]);