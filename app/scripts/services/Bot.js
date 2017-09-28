(function(){
  function Bot($firebaseArray){
    var Bot = {}
    var ref = firebase.database().ref().child("bots");
    var bots = $firebaseArray(ref);

    return {
      all: bots
    };

  }

  angular
    .module('punchline')
    .factory('Bot', ['$firebaseArray', Bot]);

})();
