/**
 * angular-strap
 * @version v2.1.5 - 2014-12-23
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes (olivier@mg-crea.com)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"use strict";
angular.module("mgcrea.ngStrapDocs").config(["$tooltipProvider", function (e) {
		angular.extend(e.defaults, {
			html : !0
		})
	}
]).controller("TooltipDemoCtrl", ["$scope", "$q", "$sce", "$tooltip", function (e) {
		e.tooltip = {
			title : "Hello Tooltip<br />This is a multiline message!",
			checked : !1
		}
	}
]), 

angular.module("mgcrea.ngStrapDocs").config(["$modalProvider", function (e) {
		angular.extend(e.defaults, {
			html : !0
		});
	}
]).controller("ServiceCtrl", ["$scope", "$modal", "$http", function($scope, $modal, $http) {
		$http.get("./demo/prop/service.json",{page:"1"}).success(function (data){
			$scope.groups = data.Groups;
			$("#pageUl").twbsPagination(
				{
					totalPages: data.Pages.totalPages,
					href: "?page={{number}}",
					first:"<<",
					prev:"<",
					next:">",
					last:">>"
				}
			);
			$scope.isDisabled = "disabled";
		});

		$scope.modal = {title: "Property", content: "<div></div>"};
	
		$scope.showProperty = function(protocol) {
			console.log(protocol)
			protocol= protocol.toLowerCase();
			$.get("./demo/prop/ws.json", null, function(json){
				$scope.propertyValue = json;
				var theProperty = $modal({
					scope: $scope,
					title: 'Property - ' + protocol,
					template: './demo/prop/' + protocol + '.html',
					animation: 'am-fade-and-scale',
					show: false});
				theProperty.$promise.then(theProperty.show);
			}, 'json');
		};
		
		$scope.saveProperty = function() {
			var value = $scope.propertyValue;
			this.$hide();
		};
		
		$scope.showMethod = function(protocol) {
			console.log(protocol)
			protocol = protocol.toLowerCase();
			var theMethod = $modal({
				scope: $scope,
				title: 'Method - ' + protocol,
				template: './demo/func/' + protocol +'.html',
				animation: 'am-fade-and-scale',
				show: false});
			theMethod.$promise.then(theMethod.show);
		};
		
		$scope.saveMethod = function() {
			alert("save method");
		};
	}
]),

angular.module("mgcrea.ngStrapDocs").controller("PropertyCtrl", ["$scope", "$modal", function($scope, $modal) {
		$scope.propertyValue = $scope.$parent.$parent.propertyValue;
	}
]);