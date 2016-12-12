var objA = angular.module("mi-app",['ngRoute']);

objA.constant("infoGlobal",{
    "infoapp":{
        "name":"Mi app",
        "version":"0.0.1"
    }
});

objA.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'pagina/inicio.html',
        controller:'ctrlInicio'
    })
    .when('/galeria',{
        templateUrl:'pagina/galeria.html',
        controller:'ctrlGaleria'
    })
    .otherwise({
        redirectTo:'/'
    });
}]);