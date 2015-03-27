// Code goes here
"use strict";
var projects = [{
    "Id": 1,
    "ProjectName": "project1",
    "PermissionStatus": "0",
    "CollectionStatus": "0",
    "ProjectBrief": "this is project 1"
},
{
    "Id": 2,
    "ProjectName": "project2",
    "PermissionStatus": "1",
    "CollectionStatus": "0",
    "ProjectBrief": "this is project 2"
},
{
    "Id": 3,
    "ProjectName": "project3",
    "PermissionStatus": "0",
    "CollectionStatus": "1",
    "ProjectBrief": "this is project 3"
},
{
    "Id": 4,
    "ProjectName": "project4",
    "PermissionStatus": "1",
    "CollectionStatus": "1",
    "ProjectBrief": "this is project 4"
}];
var myApp = angular.module("myApp", []);
myApp.controller("ProjectCtrl",
function($scope) {
    $scope.projects = projects;
    $scope.updateStatus = function(project) {
        project.CollectionStatus = project.CollectionStatus == 0 ? 1 : 0;
        console.log(project);
        if (1 == project.CollectionStatus) {
            console.log("marked");
        } else if (0 == project.CollectionStatus) {
            console.log("unmarked");
        }
    };
});