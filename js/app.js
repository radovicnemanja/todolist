var app = angular.module('todolistApp', []);

app.controller('mainCtrl', function ($scope) {
    $scope.username = "radovicnemanja";

    $scope.todos = [
        {
            text: 'Learn AngularJS',
            done: false
        },
        {
            text: 'Build an app',
            done: false
        }
    ];


    $scope.newTaskF = function () {
        $scope.todos.push({text: $scope.newTask, done: false});
        $scope.newTask = '';
    };

    $scope.remove = function ($index) {
        $scope.todos.splice($index, 1);
    };

    $scope.edit = function ($index) {
        return $scope.todos[$index].text
    };

    $scope.deleteAll = function () {
        $scope.todos = [];
    };

    // $scope.selectAll = function () {
    //     if ($scope.selectedAll) {
    //         $scope.selectedAll = true;
    //     } else {
    //         $scope.selectedAll = false;
    //     }
    //     angular.forEach($scope.Items, function (item) {
    //         item.Selected = $scope.selectedAll;
    //     });
    //
    // }


});
