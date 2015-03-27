"use strict";
angular.module("mgcrea.ngStrapDocs").config(["$modalProvider", function (e) {
		angular.extend(e.defaults, {
			html : !0
		})
	}
]).controller("MasterCtrl", ["$scope", "$modal", function ($scope, $modal) {
		$scope.showProfile = function() {
			var myProfile = $modal({
				scope: $scope,
				title: 'My Profile',
				template: './demo/profile.html',
				animation: 'am-fade-and-scale',
				show: false});
			myProfile.$promise.then(myProfile.show);
		};
		
		$scope.showMessage = function() {
			var myMessage = $modal({
				scope: $scope,
				title: 'My Profile',
				template: './demo/profile.html',
				animation: 'am-fade-and-scale',
				show: false});
			myMessage.$promise.then(myMessage.show);
		};
		
		$scope.showProject = function() {
			var myProject = $modal({
				scope: $scope,
				title: 'My Project',
				template: './demo/project.html',
				animation: 'am-fade-and-scale',
				show: false});
			myProject.$promise.then(myProject.show);
		};
	}
]);