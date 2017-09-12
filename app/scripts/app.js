(function(){
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: '/templates/landing.html'
      })
      .state('registration', {
        url: '/registration',
        templateUrl: '/templates/registration.html'
      })
      .state('user', {
        url: '/user',
        templateUrl: '/templates/user.html'
      })
      .state('filters', {
        url: '/filters',
        templateUrl: '/templates/filters.html'
      });

  }


  angular
    .module('punchline', ['ui.router'])
    .config(config);
})();
