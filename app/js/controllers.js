'use strict';

/* Controllers */

angular.module('LodSite.controllers', [])
  //main controllers
  .controller('PageCtrl', ['$scope', function ($scope) {
    var defaultTitle = 'Лига Разработчиков НИТУ МИСиС';
    $scope.$on('change_title', function (e, args) {
      $scope.title = args.title !== undefined && args.title.length ? args.title : defaultTitle;
    });
  }])
  .controller('AppCtrl', ['$scope', function ($scope) {
    $scope.isblack = false;
    $scope.$on('toggle black', function (e, args) {
      $scope.isblack = args ? args.isblack : false;
    });
  }])
  .controller('IndexCtrl', ['$scope', function ($scope) {
    $scope.$emit('change_title', {
      title: 'Лига Разработчиков НИТУ МИСиС'
    });
    $scope.$emit('toggle black');
  }])

  //header and footer controllers
  .controller('HeaderCtrl', ['$scope', function ($scope) {
    $scope.opened = false;
    $scope.activeToggle = function () {
      $scope.opened = !$scope.opened;
    }
  }])
  .controller('FooterCtrl', ['$scope', function ($scope) {
    $scope.currentDate = new Date();
  }])

  //developers controllers
  .controller('RandomDevelopersCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('http://api.lod-misis.ru/developers/random/6').success(function (data) {
      $scope.randomDevelopers = data;
    });
  }])
  .controller('FullDevelopersCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('http://api.lod-misis.ru/developers/random/6').success(function (data) {
      $scope.fullDevelopers = data;
    });
    $scope.$emit('toggle black', {isblack: true});
    $scope.$emit('change_title', {
      title: 'Разработчики - Лига Разработчиков НИТУ МИСиС'
    });
  }])
  .controller('DeveloperCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
    var developerId = $state.params.id;
    $http.get('http://api.lod-misis.ru/developers/' + developerId).success(function (data) {
      $scope.developer = data;
      $scope.$emit('change_title', {
        title: 'Разработчик' + ' - Лига Разработчиков НИТУ МИСиС'
      });
    });
    $scope.$emit('toggle black', {isblack: true});
  }])

  //projects controllers
  .controller('RandomProjectsCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('http://api.lod-misis.ru/projects/random/4').success(function (data) {
      $scope.randomProjects = data;
    });
  }])
  .controller('FullProjectsCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('http://api.lod-misis.ru/projects').success(function (data) {
      $scope.fullProjects = data;
    });
    $scope.$emit('toggle black', {isblack: true});
    $scope.$emit('change_title', {
      title: 'Проекты - Лига Разработчиков НИТУ МИСиС'
    });
  }])
  .controller('ProjectCtrl', ['$scope', '$http', '$state', function ($scope, $http, $state) {
    var projectId = $state.params.id;
    $http.get('http://api.lod-misis.ru/projects/' + projectId).success(function (data) {
      $scope.project = data;
      $scope.projectTypes = $scope.project.ProjectType;
      $scope.projectIssues = $scope.project.Issues;

      $scope.$emit('change_title', {
        title: $scope.project.Name + ' - Лига Разработчиков НИТУ МИСиС'
      });
    });
    $scope.$emit('toggle black', {isblack: true});
  }])

  .controller('LoginCtrl', ['$scope', function ($scope) {

    $scope.$emit('toggle black', {isblack: true});

    $scope.$emit('change_title', {
      title: 'Войти - Лига Разработчиков НИТУ МИСиС'
    });

  }])
  .controller('SignupCtrl', ['$scope', function ($scope) {

    $scope.$emit('toggle black', {isblack: true});

    $scope.$emit('change_title', {
      title: 'Стать разработчиком - Лига Разработчиков НИТУ МИСиС'
    });

  }])
  .controller('AboutCtrl', ['$scope', function ($scope) {

    $scope.$emit('toggle black', {isblack: true});

    $scope.$emit('change_title', {
      title: 'О нас - Лига Разработчиков НИТУ МИСиС'
    });

  }])
  .controller('OrderCtrl', ['$scope', function ($scope) {

    $scope.$emit('toggle black', {isblack: true});

    $scope.$emit('change_title', {
      title: 'Заказать - Лига Разработчиков НИТУ МИСиС'
    });

  }])
  .controller('ContactCtrl', ['$scope', function ($scope) {

    $scope.$emit('toggle black', {isblack: true});

    $scope.$emit('change_title', {
      title: 'Cвязаться - Лига Разработчиков НИТУ МИСиС'
    });

  }])

;