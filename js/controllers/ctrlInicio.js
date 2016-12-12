objA.controller("ctrlInicio",function($scope){
    cargar_jquery();//Cargando JQuery para la página Inicio
    $scope.datos = {};
    $scope.datos.referencia = "Inicio - Controlador funcionando.";
    
    function cargar_jquery(){
        //Cargando JQuery para la página Inicio
        
        $(window).resize(function(){
            //Instrucciones que se ejecutan cuando la ventana del navegador cambia de tamaño.
        });
    }
});