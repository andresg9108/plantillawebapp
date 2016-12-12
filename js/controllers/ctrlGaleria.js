objA.controller("ctrlGaleria",function($scope){
    cargar_jquery();//Cargando JQuery para la página Galeria
    $scope.datos = {};
    $scope.datos.referencia = "Galeria - Controlador funcionando.";
    
    function cargar_jquery(){
        //Cargando JQuery para la página Galeria
        
        $(window).resize(function(){
            //Instrucciones que se ejecutan cuando la ventana del navegador cambia de tamaño.
        });
    }
});