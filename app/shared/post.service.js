var app = angular.module('app')

app.service('postSrv', ['$q', function ($q) {
  this.posts = []

  this.getOne = function () {
    return new $q(function (resolve) {
      resolve(this.posts)
    }.bind(this))
  }

  this.get = function (id) {
    return new $q(function (resolve) {
      resolve({})
    })
  }

  this.create = function () {
    return new $q(function (resolve) {
      resolve({})
    })
  }

  this.update = function (id) {
    return new $q(function (resolve) {
      resolve({})
    })
  }

  this.delete = function (id) {
    return new $q(function (resolve) {
      resolve({})
    })
  }
}])
