/// <reference path="../../../typings/tsd.d.ts"/>

var evaluate = angular.module("Evaluate", []);

evaluate.directive("evaluatedir", ["$timeout", function($timeout: angular.ITimeoutService) {
    return {
        restrict: "E",
        scope: {
            type: "=",
            display: "=",
            enter: "&confirm",
            dcancle: "&cancle"
        },
        templateUrl: './src/ts/evaluate/evaluate.tpl.html',
        link: function(scope: any, ele: angular.IRootElementService) {
            var stars = [false, false, false, false, false];
            var labels = ["答非所问", "理解能力差", "一问三不知", "不礼貌"]
            var enterStars = false;

            scope.stars = stars.concat();
            scope.labels = labels.concat();
            scope.end = false;
            scope.displayDescribe = false;
            scope.data = {
                stars: 0,
                value: 0,
                describe: "",
                label: ""
            }

            scope.$watch("display", function(newVal, oldVal) {
                if (newVal === oldVal) {
                    return;
                } else {
                    enterStars = false;
                    scope.displayDescribe = false;
                    scope.data = {
                        stars: 0,
                        value: 0,
                        describe: "",
                        label: ""
                    }
                }

            })


            scope.mousehover = function(data) {
                !enterStars && (scope.data.stars = data);
            }

            scope.confirm = function(data) {
                if (data != undefined) {
                    enterStars = true;
                    if (scope.type == 1) {
                        scope.data.stars = data;
                        if (scope.data.stars != 5) {
                            scope.displayDescribe = true;
                        } else {
                            confirm(scope.data);
                        }
                    } else {
                        scope.data.value = data;
                        if (scope.data.value === false) {
                            scope.displayDescribe = true;
                        } else {
                            confirm(scope.data);
                        }
                    }
                } else {
                    confirm(null);
                }
            }

            scope.commit = function() {
                confirm(scope.data);
            }


            scope.cancle = function() {
                scope.display = false;
                scope.dcancle();
            }

            function confirm(data) {
                scope.end = true;
                if (data) {
                    $timeout(function() {
                        scope.display = false;
                        scope.end = false;
                        scope.enter({ data: data });
                    }, 800);
                } else {
                    scope.display = false;
                    scope.end = false;
                    scope.enter({ data: data });
                }


            }

        }
    }
}]);
