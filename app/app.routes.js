var app = angular.module('app')

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login')

  $stateProvider
    .state('login', {
      url: '/login',
      controller: 'LoginCtrl',
      templateUrl: './app/login/login.controller.html'
    })
    .state('base', {
      abstract: true,
      url: '/auth',
      templateUrl: './app/base.controller.html',
      controller: 'BaseCtrl'
    })
    .state('base.postList', {
      url: '/posts',
      controller: 'PostListCtrl',
      templateUrl: './app/post-list/post-list.controller.html'
    })
    .state('base.postDetail', {
      url: '/posts/:slug',
      controller: 'PostDetailCtrl',
      templateUrl: './app/post-detail/post-detail.controller.html'
    })
}])
