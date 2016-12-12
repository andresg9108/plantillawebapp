<!DOCTYPE html>

<html>
    <head>
        <title>Control de Rutas</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <!--Estilos-->
        <link rel="stylesheet" type="text/css" href="css/principal.css" />
        
        <!--Librerias-->
        <script src="lib/angular/angular.min/angular.min.js"></script>
        <script src="lib/angular/angular-route.min/angular-route.min.js"></script>
        <script src="lib/jquery/jquery.min.js"></script>
        
        <!--Controladores-->
        <script src="js/app.js"></script>
        <script src="js/controllers/ctrlInicio.js"></script>
        <script src="js/controllers/ctrlGaleria.js"></script>
        <script src="js/controllers/ctrlPrincipal.js"></script>
    </head>
    <body ng-app="mi-app" ng-controller="ctrlPrincipal">
        <a href="#/" ng-class="{ seleccion : esActivo('/') }">Inicio</a> - 
        <a href="#/galeria" ng-class="{ seleccion : esActivo('/galeria') }">Galeria</a> - 
        (App: {{nombre_app}} Version: {{version_app}})
        <br /><br />
        <div ng-view></div>
    </body>
</html>