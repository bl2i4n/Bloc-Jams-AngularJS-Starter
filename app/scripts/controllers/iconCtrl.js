(function(){
  function iconCtrl($scope, $firebaseObject) {
    var ref = firebase.database().ref().child("data");
    //download the data into a local object
    // var syncIcon = $firebaseObject(ref);
    // //three-way data binding?
    // $scope.saveEntry = function(){
    //   syncIcon.push($scope.icon);
    // }
    ref.push(data)

  }

  angular
    .module('punchline')
    .controller('iconCtrl', ['$scope', '$firebaseObject', iconCtrl])
})();
