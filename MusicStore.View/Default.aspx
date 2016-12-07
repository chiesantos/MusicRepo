<%@ 
    Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="MusicStore.View.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" data-ng-app="app">
<head runat="server">
    <title></title>
    <link href="Content/bootstrap.min.css" rel="stylesheet" />
    <link href="Content/main.css" rel="stylesheet" />
</head>
<body>
    <div class="container" ng-view>
    
    </div>

    <script src="Scripts/angular.min.js"></script>
    <script src="Scripts/jquery-1.9.0.min.js"></script>
    <script src="Scripts/bootstrap.min.js"></script> 
    <script src="Scripts/angular-route.min.js"></script>
    <script src="Scripts/angular.min.js"></script> 
    <script src="app/app.js"></script>
    <script src="app/controllers/homeController.js"></script>
    <script src="app/controllers/listsController.js"></script>
    <script src="app/controllers/manageController.js"></script>
    <script src="app/controllers/artistController.js"></script>
    <script src="app/controllers/songController.js"></script>
    <script src="app/controllers/reportController.js"></script>
    <script src="app/services/appFactory.js"></script>
</body>
</html>
