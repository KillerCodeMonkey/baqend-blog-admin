var app = angular.module('app')

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login')

  $stateProvider
    .state('root', {
      url: '/',
      abstract: true,
      template: '<ui-view></ui-view>',
      resolve: {
        dbConnected: ['$window', function ($window) {
          return $window.DB.connect('blog')
        }]
      }
    })
    .state('root.login', {
      url: 'login',
      controller: 'LoginCtrl',
      templateUrl: './app/login/login.controller.html'
    })
    .state('root.base', {
      abstract: true,
      url: 'auth',
      templateUrl: './app/base.controller.html',
      controller: 'BaseCtrl'
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
