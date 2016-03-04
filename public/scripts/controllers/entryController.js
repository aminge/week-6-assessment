myApp.controller('EntryController', ['$scope', 'DataFactory', function($scope, DataFactory) {
    $scope.dataFactory = DataFactory;

    $scope.submitHero = function() {
        var heroToSubmit = {
            alias: $scope.alias,
            first_name: $scope.first_name,
            last_name: $scope.last_name,
            city: $scope.city,
            primary_power: $scope.primary_power
        };
        console.log('hero to be submitted: ', heroToSubmit);
        $scope.dataFactory.factorySubmitHero(heroToSubmit);
    }
}]);