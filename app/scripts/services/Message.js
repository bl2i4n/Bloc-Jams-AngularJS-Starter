(function(){

  function Message($firebaseArray){
    var Message = {};
    var ref = firebase.database().ref().child("messages");

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);

})();
