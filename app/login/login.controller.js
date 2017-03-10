var app = angular.module('app')

app.controller('LoginCtrl', ['$scope', '$state', 'authSrv', function ($scope, $state, authSrv) {
  $scope.form = {}

  $scope.handleFormSubmit = function () {
    authSrv.login($scope.form.login, $scope.form.password).then(function () {
      $state.go('base.postList')
    })
  }
}])
