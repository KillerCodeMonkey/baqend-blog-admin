var app = angular.module('app')

app.service('authSrv', ['$q', function ($q) {
  this.isLoggedIn = false

  this.login = function (username, password) {
    return new $q(function (resolve, reject) {
      this.isLoggedIn = true
      resolve()
    }.bind(this))
  }
}])
