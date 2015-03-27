/**
 * angular-strap
 * @version v2.1.5 - 2014-12-23
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes (olivier@mg-crea.com)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"use strict";
angular.module("mgcrea.ngStrapDocs").config(["$modalProvider", function (e) {
		angular.extend(e.defaults, {
			html : !0
		});
	}
]).controller("ProjectCtrl", ["$scope", "$modal" ,"$http", function($scope, $modal, $http) {
	$http.get("./demo/prop/project.json").success(function (data){
		$scope.projects = data.Projects;
		$("#pageUl").twbsPagination(
			{
				totalPages: data.Pages.totalPages,
				first:"<<",
				prev:"<",
				next:">",
				last:">>",
				onPageClick: function(event, page, status){
					status = data.Status;
					$http.get("./demo/prop/projectPage2.json", [{page: page, status: status}]).success(function (data){
						$scope.projects = data.Projects;
					})
				}
			}
		);
		$scope.isDisabled = "disabled";
	});

	$scope.modal = {
		title : "Title1",
		content : "Hello Modal<br />This is a multiline message!"
		};
	}
]),

angular.module("mgcrea.ngStrapDocs").config(["$modalProvider", function (e) {
		angular.extend(e.defaults, {
			html : !0
		});
	}
]).controller("FooterCtrl", ["$scope", "$modal", "$http", function ($scope, $modal, $http) {
	$http.get("./demo/prop/projectFoot.json").success(function (data){
		$scope.status = data.Status;
		if(data.Status === "0") {$("#navbar-footer > ul > li:nth-of-type(1)").addClass("active");}
		else if($scope.status === "1") {$("#navbar-footer > ul > li:nth-of-type(2)").addClass("active");}
		else if($scope.status === "2") {$("#navbar-footer > ul > li:nth-of-type(3)").addClass("active");}
		else if($scope.status === "3") {$("#navbar-footer > ul > li:nth-of-type(4)").addClass("active");}
		else if($scope.status === "4") {$("#navbar-footer > ul > li:nth-of-type(5)").addClass("active");}
	});
	$scope.modal = {
		title : "Title",
		content : "Hello Modal<br />This is a multiline message!"
		};
	}
]);