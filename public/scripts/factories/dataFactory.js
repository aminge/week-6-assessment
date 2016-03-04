myApp.factory('DataFactory', ['$http', function($http) {

    // PRIVATE

    var privateSubmitHero = function(hero) {
        console.log('The hero you submitted is: ', hero);
        var promise = $http.post('/hero', hero).then(function(response){
            console.log('here is the response: ', response);
        });
        return promise
    };

    var privateGetHeroesWithPower = function(power) {
        var promise = $http.get('/power', power).then(function(response) {
            console.log('here are the heroes: ', response);
        });
        return promise;
    };




    // PUBLIC

    var publicAPI = {
        factorySubmitHero: function(hero) {
            return privateSubmitHero(hero);
        },
        factoryGetHeroesWithPower: function(power) {
            return privateGetHeroesWithPower(power);
        }
    };

    return publicAPI;
}]);