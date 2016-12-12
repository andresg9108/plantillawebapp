objA.controller("ctrlPrincipal",function($scope,$location,infoGlobal){
    $scope.nombre_app = infoGlobal.infoapp.name;
    $scope.version_app = infoGlobal.infoapp.version;
    
    $scope.esActivo = function(rutaActual){
        return rutaActual === $location.path();
    }
});