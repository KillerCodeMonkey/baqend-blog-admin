var app = angular.module('app')

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login')

  var adminResolve = ['$q', '$state', '$timeout', '$window', function ($q, $state, $timeout, $window) {
    return $window.DB.ready().then(function () {
      if ($window.DB.User.me) {
        return true
      }
      return false
    })
  }]

  $stateProvider
    .state('root', {
      url: '/',
      abstract: true,
      template: '<ui-view></ui-view>',
      resolve: {
        connected: ['$window', function ($window) {
          return $window.DB.connect('blog')
        }]
      }
    })
    .state('root.login', {
      url: 'login',
      controller: 'LoginCtrl',
      templateUrl: './app/login/login.controller.html',
      resolve: {
        isAdmin: adminResolve
      }
    })
    .state('root.base', {
      abstract: true,
      url: 'auth',
      templateUrl: './app/base.controller.html',
      controller: 'BaseCtrl',
      resolve: {
        isAdmin: adminResolve
      }
    })
    .state('root.base.postList', {
      url: '/posts',
      controller: 'PostListCtrl',
      templateUrl: './app/post-list/post-list.controller.html'
    })
    .state('root.base.postDetail', {
      url: '/posts/:slug',
      controller: 'PostDetailCtrl',
      templateUrl: './app/post-detail/post-detail.controller.html'
    })
}])
