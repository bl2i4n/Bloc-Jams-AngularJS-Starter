(function(){
  function userCtrl($scope, userFactory){
    $scope.createUser = function(){
      $scope.message = null;
      $scope.error = null;

      //retrieve auth state
      $scope.auth = userFactory;

      // Create a new user
      userFactory.$createUserWithEmailAndPassword($scope.email, $scope.password)
        .then(function(firebaseUser){
          $scope.message = "User created with uid: " + firebaseUser.email;
          $(".content").html(firebaseUser.email)
        }).catch(function(error){
          $scope.error = error;
        });

        //TODO: Is this even getting called?
      $scope.auth.$onAuthStateChanged(function(firebaseUser) {
        $scope.firebaseUser = firebaseUser;
      });
    };

  }

  angular
        .module('punchline')
        .controller('userCtrl', ['$scope', 'userFactory', '$firebaseAuth', userCtrl]);
})();
