var app = angular.module('app')

app.service('authSrv', ['$q', '$window', function ($q, $window) {
  this.isLoggedIn = false

  this.login = function (login, password) {
    return $window.DB.ready().then(function () {
      return $window.DB.User.login(login, password)
    }).then(function () {
      this.isLoggedIn = true
      return true
    }.bind(this), function (err) {
      this.isLoggedIn = false
      console.log(err)
    })
  }

  this.logout = function () {
    return $window.DB.ready().then(function () {
      return $window.DB.User.logout()
    }).then(function () {
      this.isLoggedIn = false
      return true
    }.bind(this), function (err) {
      this.isLoggedIn = false
      console.log(err)
    })
  }
}])
