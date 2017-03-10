var app = angular.module('app')

app.controller('LoginCtrl', [
  '$scope',
  '$state',
  'authSrv',
  'isAdmin',
  function ($scope, $state, authSrv, isAdmin) {
    if (isAdmin) {
      return $state.go('root.base.postList', {
        location: 'replace'
      })
    }

    $scope.form = {
      login: '',
      password: ''
    }

    $scope.handleFormSubmit = function () {
      authSrv.login($scope.form.login, $scope.form.password).then(function () {
        $state.go('root.base.postList')
      })
    }
  }
])
