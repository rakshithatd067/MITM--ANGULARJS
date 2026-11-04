
var app = angular.module("myApp", []);

app.controller("StudentController", function($scope) {

    $scope.college = "MITM College";

    $scope.studentName = "RAKSHITHA";

    $scope.semester = 3;

    $scope.marks = 75;

    $scope.showDetails = true;

    // Initially two students
    $scope.students = [
        "MANOJ",
        "SAHANA"
    ];

    // Add student function
    $scope.addStudent = function() {

        if ($scope.studentName != "SINCHANA") {

            $scope.students.push($scope.studentName);

            $scope.studentName = "SANIKA";

        } else {

            alert("Please enter student name");

        }

    };

});


