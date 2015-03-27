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
		})
	}
]).controller("TestingCtrl", ["$scope", "$modal", function($scope, $modal) {
		$scope.modal = {
			title : "Title",
			content : "Hello Modal<br />This is a multiline message!"
		};
		
		$scope.tooltip = {
		  "title": "Hello Tooltip<br />This is a multiline message!",
		  "checked": false
		};
	}
]);