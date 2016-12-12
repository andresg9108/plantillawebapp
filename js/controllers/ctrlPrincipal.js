objA.controller("ctrlPrincipal",function($scope,$location,infoGlobal){
    cargar_jquery();//Cargando código JQuery que se ejecutara en todas las páginas de la aplicación.
    $scope.nombre_app = infoGlobal.infoapp.name;
    $scope.version_app = infoGlobal.infoapp.version;
    
    $scope.esActivo = function(rutaActual){
        //Esta función muestra cual página se encuentra activa.
        return rutaActual === $location.path();
    }
    
    function cargar_jquery(){
        //Cargando código JQuery que se ejecutara en todas las páginas de la aplicación.
        
        $(window).resize(function(){
            //Instrucciones que se ejecutan cuando la ventana del navegador cambia de tamaño.
        });
    }
});