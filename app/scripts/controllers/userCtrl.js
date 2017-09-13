(function(){
  function userCtrl($scope, userFactory){
    $scope.createUser = function(){
      $scope.message = null;
      $scope.error = null;

      // Create a new user
      userFactory.$createUserWithEmailAndPassword($scope.email, $scope.password)
        .then(function(firebaseUser){
          $scope.message = "User created with uid: " + firebaseUser.uid;
        }).catch(function(error){
          $scope.error = error;
        });
    };

  }

  angular
        .module('punchline')
        .controller('userCtrl', ['$scope', 'userFactory', '$firebaseAuth', userCtrl]);
})();
