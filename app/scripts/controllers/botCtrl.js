(function(){

  function botCtrl($scope, Bot){
    $scope.botList = Bot.all;
  }


  angular
    .module('punchline')
    .controller('botCtrl', ['$scope', 'Bot', botCtrl]);

})();
