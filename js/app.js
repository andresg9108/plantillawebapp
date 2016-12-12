//Inicializando aplicación AngularJs
var objA = angular.module("mi-app",['ngRoute']);

objA.constant("infoGlobal",{//Definiendo Objeto Json visible en toda la aplicación.
    "infoapp":{
        "name":"Mi app",
        "version":"0.0.1"
    }
});

objA.config(['$routeProvider',function($routeProvider){
    //Controlando las rutas de la aplicación, definiendo que página y que controlador corresponde a cada una de estas.
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