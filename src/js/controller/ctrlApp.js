objA.controller("ctrlApp", function($scope, $location, infoGlobal){
    $scope.nameApp = infoGlobal.infoapp.name;
    $scope.versionApp = infoGlobal.infoapp.version;

    $scope.isActive = function(currentRoute){
        return currentRoute === $location.path();
    }
});
