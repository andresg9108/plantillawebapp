objA.controller("ctrlApp", function($scope, $location, infoGlobal){
    $scope.name_app = infoGlobal.infoapp.name;
    $scope.version_app = infoGlobal.infoapp.version;

    $scope.esActivo = function(rutaActual){
        //Esta función muestra cual página se encuentra activa.
        return rutaActual === $location.path();
    }
});
