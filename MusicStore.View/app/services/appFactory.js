app.factory('appFactory', ['$http', '$q', function ($http, $q) {
    var factory = {};
    var api = "http://localhost:32030/api/";

    factory.getArtists = function () {
        var q = $q.defer();
        $http.get(api + 'Artist/GetAll')
        .success(function (data) {
            q.resolve(data);
        }).error(function (e) {
            q.reject(e);
        });

        return q.promise;
    },

    factory.getArtistById = function (id) {
        var q = $q.defer();
        $http.get(api + 'Artist/GetById?id=' + id)
        .success(function (data) {
            q.resolve(data);
        }).error(function (e) {
            q.reject(e);
        });

        return q.promise;
    },

    factory.getActiveArtists = function () {
        var q = $q.defer();
        $http.get(api + 'Artist/GetAllEnabled')
        .success(function (data) {
            q.resolve(data);
        }).error(function (e) {
            q.reject(e);
        });

        return q.promise;
    },

    factory.getSongs = function () {
        var q = $q.defer();
        $http.get(api + 'Song/GetAll')
        .success(function (data) {
            q.resolve(data);
        }).error(function (e) {
            q.reject(e);
        });

        return q.promise;
    },

    factory.getSongById = function (id) {
        var q = $q.defer();
        $http.get(api + 'Song/GetById?id=' + id)
        .success(function (data) {
            q.resolve(data);
        }).error(function (e) {
            q.reject(e);
        });

        return q.promise;
    },

    factory.getSongsByArtistId = function (id) {
        var q = $q.defer();
        $http.get(api + 'Song/GetAllByArtistId?id=' + id)
        .success(function (data) {
            q.resolve(data);
        }).error(function (e) {
            q.reject(e);
        });

        return q.promise;
    },

    factory.getSongsInView = function () {
        var q = $q.defer();
        $http.get(api + 'Song/GetAllSongsInView')
        .success(function (data) {
            q.resolve(data);
        }).error(function (e) {
            q.reject;
        });

        return q.promise;
    },

    //Inserts
    factory.createArtist = function (obj) {
        var q = $q.defer();
        $http({
            method: "POST",
            url: api + "Artist/Insert",
            data: obj
        }).success(function (data) {
            q.resolve(data);
        }).error(function (e) {
            q.reject(e);
        });

        return q.promise;
    },

    factory.createSong = function (obj) {
        var q = $q.defer();
        $http({
            method: "POST",
            url: api + "Song/Insert",
            data: obj
        }).success(function (data) {
            q.resolve(data);
        }).error(function (e) {
            q.reject(e);
        });

        return q.promise;
    },

    //Updates
    factory.updateArtist = function (obj) {
        var q = $q.defer();
        $http({
            method: "POST",
            url: api + "Artist/Update",
            data: obj
        }).success(function (data) {
            q.resolve(data);
        }).error(function (e) {
            q.reject(e);
        });

        return q.promise;
    }

    factory.updateSong = function (obj) {
        var q = $q.defer();
        $http({
            method: "POST",
            url: api + "Song/Update",
            data: obj
        }).success(function (data) {
            q.resolve(data);
        }).error(function (e) {
            q.reject(e);
        });

        return q.promise;
    },

    //Deletes
    factory.deleteArtist = function (obj) {
        var q = $q.defer();
        $http({
            method: "POST",
            url: api + "Artist/Delete",
            data: obj
        }).success(function (data) {
            q.resolve(data);
        }).error(function (e) {
            q.reject(e);
        });

        return q.promise;
    },

    factory.deleteSong = function (obj) {
        var q = $q.defer();
        $http({
            method: "POST",
            url: api + "Song/Delete",
            data: obj
        }).success(function (data) {
            q.resolve(data);
        }).error(function (e) {
            q.reject(e);
        });

        return q.promise;
    }

    return factory;
}]);