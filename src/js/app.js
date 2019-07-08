var objA = angular.module("myapp",['ngRoute']);

objA.constant("infoGlobal",{//Definiendo Objeto Json visible en toda la aplicación.
    "infoapp":{
        "name":"My app",
        "version":"0.1.0"
    }
});

objA.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'pages/home.html',
        controller:'ctrlInicio'
    })
    .when('/gallery',{
        templateUrl:'pages/gallery.html',
        controller:'ctrlGaleria'
    })
    .otherwise({
        redirectTo:'/'
    });
}]);