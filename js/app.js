var smApp = angular.module('smApp',['ui.bootstrap','ui.router']);

smApp.config(function($stateProvider, $urlRouterProvider) {

  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/home.html",
      controller: 'appController',
    })
    .state('404', {
      url: "/404",
      templateUrl: "404.html",
      controller: 'app404Controller',
    })
    // For any unmatched url, redirect to /state1
     $urlRouterProvider.otherwise("/404");

});
smApp.directive('comparisonSlider', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).twentytwenty(scope.$eval(attrs.comparisonSlider));
        }
    };
});
//controller
smApp.controller('appController', function($scope){

	$scope.taskList = [];
	$scope.task;
	$scope.taskDetail;
	$scope.deadLine;
	$scope.alerts = [];
	$scope.searchText;
	
  	//Initializer
	init();
	function init(){
		
		
	};
	
});
smApp.controller('app404Controller', function($scope){

});
angular.module('smApp').run(function($http, $rootScope, $location) {

//Active menu
 $rootScope.isActive = function (viewLocation) {
        console.log($location.path());
        return viewLocation === $location.path();
 };

});