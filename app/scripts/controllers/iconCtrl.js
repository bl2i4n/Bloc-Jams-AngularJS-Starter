(function(){
  function iconCtrl($scope, $firebaseArray) {
    var ref = firebase.database().ref().child('data')
    // download the data into a local object
    // var syncIcon = $firebaseObject(ref);
    $scope.icons = $firebaseArray(ref);

    $scope.add = function(){
      $scope.icons.push($scope.icon);
    }

  }

  angular
    .module('punchline')
    .controller('iconCtrl', ['$scope', '$firebaseArray', iconCtrl])
})();
