(function(){
  function Message($firebaseArray){
    var Message = {}
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    return {
      all: messages
    };

  }

  angular
    .module('punchline')
    .factory('Message', ['$firebaseArray', Message]);

})();
