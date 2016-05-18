module RongIMWidget {

    export class DirectiveFactory {
        public static GetFactoryFor(classType: any): ng.IDirectiveFactory {
            var factory = (...args: any[]): IDirective => {
                var newInstance = Object.create(classType.prototype);
                newInstance.constructor.apply(newInstance, args);
                return newInstance;
            }
            factory.$inject = classType.$inject;
            return factory;
        }
    }

    interface IDirective extends Function, ng.IDirective {
        DirectiveName: string;
    }

    class errSrc {

        static instance() {
            return new errSrc();
        }

        link(scope: any, element: ng.IRootElementService, attrs: ng.IAttributes) {
            if (!attrs["ngSrc"]) {
                attrs.$set('src', attrs["errSrc"]);
            }

            element.bind('error', function() {
                if (attrs["src"] != attrs["errSrc"]) {
                    attrs.$set('src', attrs["errSrc"]);
                }
            });
        }
    }

    angular.module("RongWebIMWidget")
        .directive('errSrc', errSrc.instance)
        .filter('trustHtml', ["$sce", function($sce: angular.ISCEService) {
            return function(str: any) {
                return $sce.trustAsHtml(str);
            }
        }]).filter("historyTime", ["$filter", function($filter: angular.IFilterService) {
            return function(time: Date) {
                var today = new Date();
                if (time.toDateString() === today.toDateString()) {
                    return $filter("date")(time, "HH:mm");
                } else if (time.toDateString() === new Date(today.setTime(today.getTime() - 1)).toDateString()) {
                    return "昨天" + $filter("date")(time, "HH:mm");
                } else {
                    return $filter("date")(time, "yyyy-MM-dd HH:mm");
                }
            };
        }]);


}
