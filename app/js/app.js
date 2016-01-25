'use strict';

angular.module('LodSite', [
    'ng',
    'ngRoute',
    'ui.router',

    'LodSite.directives',
    'LodSite.controllers'
  ])
  .config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
    function ($locationProvider, $stateProvider, $urlRouterProvider) {

      $locationProvider.hashPrefix('!');
      $locationProvider.html5Mode(true);

      $urlRouterProvider
        .otherwise('/');

      $stateProvider
        .state('index', {
          url: '/',
          templateUrl: templateUrl('index', 'index'),
          controller: 'IndexCtrl'
        })

        //projects
        .state('projects', {
          url: '/projects',
          template: '<ui-view/>',
          abstract: true
        })
        .state('projects.index', {
          url: '',
          templateUrl: templateUrl('projects', 'projects-index')
        })
        .state('projects.item', {
          url: '/:id',
          templateUrl: templateUrl('projects', 'projects-item')
        })

        //developers
        .state('developers', {
          url: '/developers',
          templateUrl: '<ui-view/>',
          abstract: true
        })
        .state('developers.index', {
          url: '',
          templateUrl: templateUrl('index', 'developers-index'),
          controller: 'DevelopersCtrl'
        })
        .state('developers.item', {
          url: '/:id',
          templateUrl: templateUrl('projects', 'developers-item')
        });

      //.state('order', {
      //url: '/order',
      //templateUrl: templateUrl('index', 'index'),
      //controller: 'OrderCtrl'
      //})
    }
  ]);

// accessory functions
function templateUrl(module, name) {
  return 'app/templates/' + module + '/' + name + '.html';
}
function setPaddingBottom() {
  $('.content').css('padding-bottom', $('footer').innerHeight());
}
setTimeout(setPaddingBottom, 500);
$(window).resize(setPaddingBottom);
