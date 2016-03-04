myApp.controller('ListingController', ['$scope', 'DataFactory', function($scope, DataFactory) {
    $scope.dataFactory = DataFactory;

    $scope.getHeroesWithPower = function() {
        $scope.dataFactory.factoryGetHeroesWithPower($scope.primary_power);
    }
}]);