(function(){

  function botCtrl($scope, Bot, Message){
    $scope.botList = Bot.all;

    // $scope.setCurrentRoom = function(room){
    //   $scope.currentRoom = room;
    //   $scope.messages = Message.getByRoomId(room.$id)
    // };

    $scope.messageList = Message.all;

  }


  angular
    .module('punchline')
    .controller('botCtrl', ['$scope', 'Bot', 'Message', botCtrl]);

})();
