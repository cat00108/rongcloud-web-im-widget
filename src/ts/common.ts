module RongWebIMWidget {

    var userAgent = window.navigator.userAgent;

    export class Helper {
        static timeCompare(first: Date, second: Date) {
            var pre = first.toString();
            var cur = second.toString();
            return pre.substring(0, pre.lastIndexOf(":")) == cur.substring(0, cur.lastIndexOf(":"))
        }
        static browser = {
            version: (userAgent.match(/.+(?:rv|it|ra|chrome|ie)[\/: ]([\d.]+)/) || [0, '0'])[1],
            safari: /webkit/.test(userAgent),
            opera: /opera|opr/.test(userAgent),
            msie: /msie|trident/.test(userAgent) && !/opera/.test(userAgent),
            chrome: /chrome/.test(userAgent),
            mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit|like gecko)/.test(userAgent)
        }
        static getFocus = function(obj: any) {
            obj.focus();
            if (obj.createTextRange) {//ie
                var rtextRange = obj.createTextRange();
                rtextRange.moveStart('character', obj.value.length);
                rtextRange.collapse(true);
                rtextRange.select();
            }
            else if (obj.selectionStart) {//chrome "<input>"、"<textarea>"
                obj.selectionStart = obj.value.length;
            } else if (window.getSelection && obj.lastChild) {

                var sel = window.getSelection();

                var tempRange = document.createRange();
                if (Helper.browser.msie) {
                    tempRange.setStart(obj.lastChild, obj.lastChild.length);
                } else {
                    tempRange.setStart(obj.firstChild, obj.firstChild.length);
                }

                sel.removeAllRanges();
                sel.addRange(tempRange);
            }
        }

        static checkType(obj) {
            var type = Object.prototype.toString.call(obj);
            return type.substring(8, type.length - 1).toLowerCase();
        }

        static ImageHelper = {
            getThumbnail(obj: any, area: number, callback: any) {
                var canvas = document.createElement("canvas"),
                    context = canvas.getContext('2d');

                var img = new Image();

                img.onload = function() {
                    var target_w: number;
                    var target_h: number;

                    var imgarea = img.width * img.height;
                    if (imgarea > area) {
                        var scale = Math.sqrt(imgarea / area);
                        scale = Math.ceil(scale * 100) / 100;
                        target_w = img.width / scale;
                        target_h = img.height / scale;
                    } else {
                        target_w = img.width;
                        target_h = img.height;
                    }

                    canvas.width = target_w;
                    canvas.height = target_h;

                    context.drawImage(img, 0, 0, target_w, target_h);

                    try {
                        var _canvas = canvas.toDataURL("image/jpeg", 0.5);
                        _canvas = _canvas.substr(23);
                        callback(obj, _canvas);
                    } catch (e) {
                        callback(obj, null);
                    }

                }
                img.src = Helper.ImageHelper.getFullPath(obj);
            },
            getFullPath(file: File) {
                window.URL = window.URL || window.webkitURL;
                if (window.URL && window.URL.createObjectURL) {
                    return window.URL.createObjectURL(file)
                } else {
                    return null;
                }
            }
        }
        static CookieHelper = {
            setCookie: function(name: string, value: string, exires?: number) {
                if (exires) {
                    var date = new Date();
                    date.setDate(date.getDate() + exires)
                    document.cookie = name + "=" + encodeURI(value) + ";expires=" + date.toUTCString();
                } else {
                    document.cookie = name + "=" + encodeURI(value) + ";";
                }
            },
            getCookie: function(name: string) {
                var start = document.cookie.indexOf(name + "=");
                if (start != -1) {
                    var end = document.cookie.indexOf(";", start);
                    if (end == -1) {
                        end = document.cookie.length;
                    }
                    return decodeURI(document.cookie.substring(start + name.length + 1, end));
                } else {
                    return ""
                }
            },
            removeCookie: function(name: string) {
                var con = this.getCookie(name);
                if (con) {
                    this.setCookie(name, "con", -1);
                }
            }
        }
    }

    export class NotificationHelper {

        static desktopNotification = true;

        static isNotificationSupported() {
            return typeof Notification === "function";
        }

        static requestPermission() {
            if (!NotificationHelper.isNotificationSupported()) {
                return;
            }
            Notification.requestPermission(function(status: string) {
            });
        }

        static onclick(n: Notification) { }

        static showNotification(config: any) {
            if (!NotificationHelper.isNotificationSupported()) {
                console.log('the current browser does not support Notification API');
                return;
            }
            if (Notification.permission !== "granted") {
                console.log('the current page has not been granted for notification');
                return;
            }
            if (!NotificationHelper.desktopNotification) {
                return;
            }

            var title = config.title;
            delete config.title;
            var n = new Notification(title, config);

            n.onshow = function() {
                setTimeout(function() {
                    n.close();
                }, 5000);
            };

            n.onclick = function() {
                window.focus();
                NotificationHelper.onclick(n);
                n.close();
            };

            n.onerror = function() {
            };

            n.onclose = function() {
            };
        }
    }

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

    class contenteditableDire {
        restrict: string = 'A';
        require: string = '?ngModel';
        link(scope: any, element: angular.IRootElementService, attrs: angular.IAttributes, ngModel: angular.INgModelController) {
            function replacemy(e: string) {
                return e.replace(new RegExp("<[\\s\\S.]*?>", "ig"), "");
            }
            var domElement = <any>element[0];

            scope.$watch(function() {
                return ngModel.$modelValue;
            }, function(newVal: string) {
                if (document.activeElement === domElement) {
                    return;
                }
                if (newVal === '' || newVal === attrs["placeholder"]) {
                    domElement.innerHTML = attrs["placeholder"];
                    domElement.style.color = "#a9a9a9";
                }
            });
            element.bind('focus', function() {
                if (domElement.innerHTML == attrs["placeholder"]) {
                    domElement.innerHTML = '';
                }
                domElement.style.color = '';
            });
            element.bind('blur', function() {
                if (domElement.innerHTML === '') {
                    domElement.innerHTML = attrs["placeholder"];
                    domElement.style.color = "#a9a9a9";
                }
            });


            if (!ngModel) return;

            element.bind("paste", function(e: any) {
                var that = this, ohtml = that.innerHTML;
                timeoutid && clearTimeout(timeoutid);
                var timeoutid = setTimeout(function() {
                    that.innerHTML = replacemy(that.innerHTML);
                    ngModel.$setViewValue(that.innerHTML);
                    timeoutid = null;
                }, 50);
            });

            ngModel.$render = function() {
                element.html(ngModel.$viewValue || '');
            };

            element.bind("keydown paste", read);
            // element.bind("input", read);

            function read() {
                var html = element.html();
                html = html.replace(/^<br>$/i, "");
                html = html.replace(/<br>/gi, "\n");
                if (attrs["stripBr"] && html == '<br>') {
                    html = '';
                }
                ngModel.$setViewValue(html);
            }
        }
    }

    class ctrlEnterKeys {
        restrict: string = "A";
        require: string = '?ngModel';
        scope: any = {
            fun: "&",
            ctrlenter: "=",
            content: "="
        };
        link(scope: any, element: angular.IRootElementService, attrs: angular.IAttributes, ngModel: angular.INgModelController) {
            scope.ctrlenter = scope.ctrlenter || false;
            element.bind("keypress", function(e: any) {
                if (scope.ctrlenter) {
                    if (e.ctrlKey === true && e.keyCode === 13 || e.keyCode === 10) {
                        scope.fun();
                        scope.$parent.$apply();
                        e.preventDefault();
                    }
                } else {
                    if (e.ctrlKey === false && e.shiftKey === false && (e.keyCode === 13 || e.keyCode === 10)) {
                        scope.fun();
                        scope.$parent.$apply();
                        e.preventDefault();
                    } else if (e.ctrlKey === true && e.keyCode === 13 || e.keyCode === 10) {
                        //ctrl+enter 换行
                    }
                }
            })
        }
    }

    angular.module("RongWebIMWidget")
        .directive('errSrc', errSrc.instance)
        .directive("contenteditableDire", DirectiveFactory.GetFactoryFor(contenteditableDire))
        .directive("ctrlEnterKeys", DirectiveFactory.GetFactoryFor(ctrlEnterKeys))
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
