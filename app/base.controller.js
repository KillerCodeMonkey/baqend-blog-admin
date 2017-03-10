var app = angular.module('app')

app.controller('BaseCtrl', ['$scope', '$state', 'authSrv', 'isAdmin', function ($scope, $state, authSrv, isAdmin) {
  if (!isAdmin) {
    return $state.go('root.login', {
      location: 'replace'
    })
  }

  $scope.logout = function () {
    authSrv.logout().then(function () {
      $state.go('root.login')
    }, function () {
      $state.go('root.login')
    })
  }
}])
