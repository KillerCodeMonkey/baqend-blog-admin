var app = angular.module('app')

app.service('authSrv', ['$q', function ($q) {
  this.posts = []

  this.getOne = function () {
    return new $q(function (resolve) {
      resolve(this.posts)
    }.bind(this))
  }

  this.get = function (id) {
    return new $q(function (resolve) {
      resolve({})
    }.bind(this))
  }

  this.create = function () {
    return new $q(function (resolve) {
      resolve({})
    }.bind(this))
  }

  this.update = function (id) {
    return new $q(function (resolve) {
      resolve({})
    }.bind(this))
  }

  this.delete = function (id) {
    return new $q(function (resolve) {
      resolve({})
    }.bind(this))
  }
}])
