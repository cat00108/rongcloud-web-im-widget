module RongWebIMWidget.conversation {
    var factory = RongWebIMWidget.DirectiveFactory.GetFactoryFor;

    class rongConversation {

        static $inject: string[] = ["ConversationServer"];

        constructor(private conversationServer: RongWebIMWidget.conversation.IConversationService) {

        }

        restrict: string = "E";
        templateUrl: string = "./src/ts/conversation/conversation.tpl.html";
        controller: string = "conversationController";
        link(scope: any, ele: angular.IRootElementService) {
            if (window["jQuery"] && window["jQuery"].nicescroll && !Helper.browser.msie) {
                $("#Messages").niceScroll({
                    'cursorcolor': "#0099ff",
                    'cursoropacitymax': 1,
                    'touchbehavior': true,
                    'cursorwidth': "8px",
                    'cursorborder': "0",
                    'cursorborderradius': "5px"
                });
            }
            scope.scrollBar = function() {
                setTimeout(function() {
                    var ele = document.getElementById("Messages");
                    if (!ele)
                        return;
                    ele.scrollTop = ele.scrollHeight;
                }, 200);
            }
        }

    }

    class emoji {
        restrict: string = "E";
        scope: any = {
            item: "=",
            content: "="
        };
        template: string = '<div style="display:inline-block"></div>'
        link(scope: any, ele: angular.IRootElementService, attr: angular.IAttributes) {

            ele.find("div").append(scope.item);
            ele.on("click", function() {
                scope.content.messageContent = scope.content.messageContent || "";
                scope.content.messageContent = scope.content.messageContent.replace(/\n$/, "");
                scope.content.messageContent = scope.content.messageContent + scope.item.children[0].getAttribute("name");
                scope.$parent.$apply();
                var obj = document.getElementById("inputMsg");
                RongWebIMWidget.Helper.getFocus(obj);
            })
        }
    }

    class textmessage {
        restrict: string = "E";
        scope: any = { msg: "=" }
        template: string = '<div class="">' +
        '<div class="rongcloud-Message-text"><pre class="rongcloud-Message-entry" ng-bind-html="msg.content|trustHtml"><br></pre></div>' +
        '</div>';
        link(scope: any, ele: angular.IRootElementService, attr: any) {
          
        }
    }

    class includinglinkmessage {
        restrict: string = "E";
        scope: any = { msg: "=" };
        template: string = '<div class="">' +
        '<div class="rongcloud-Message-text">' +
        '<pre class="rongcloud-Message-entry" style="">' +
        '维护中 由于我们的服务商出现故障，融云官网及相关服务也受到影响，给各位用户带来的不便，还请谅解。  您可以通过 <a href="#">【官方微博】</a>了解</pre>' +
        '</div>' +
        '</div>';

    }
    class imagemessage {
        restrict: string = "E";
        scope: any = { msg: "=" };
        template: string = '<div class="">' +
        '<div class="rongcloud-Message-img">' +
        '<span id="{{\'rebox_\'+$id}}"  class="rongcloud-Message-entry" style="">' +
        // '<p>发给您一张示意图</p>' +
        // '<img ng-src="{{msg.content}}" alt="">' +
        '<a href="{{msg.imageUri}}" target="_black"><img ng-src="{{msg.content}}"  data-image="{{msg.imageUri}}" alt=""/></a>' +
        '</span>' +
        '</div>' +
        '</div>';
        link(scope: any, ele: angular.IRootElementService, attr: any) {

            var img = new Image();
            img.src = scope.msg.imageUri;
            img.onload = function() {
                scope.$apply(function() {
                    scope.msg.content = scope.msg.imageUri
                });
            }

            setTimeout(function() {
                if (window["jQuery"] && window["jQuery"].rebox) {
                    $('#rebox_' + scope.$id).rebox({ selector: 'a', zIndex: 999999, theme: "rebox" }).bind("rebox:open", function() {
                        //jQuery rebox 点击空白关闭
                        var rebox = <any>document.getElementsByClassName("rebox")[0];
                        rebox.onclick = function(e: any) {
                            if (e.target.tagName.toLowerCase() != "img") {
                                var rebox_close = <any>document.getElementsByClassName("rebox-close")[0];
                                rebox_close.click();
                                rebox = null; rebox_close = null;
                            }
                        }
                    });
                }
            });
        }
    }
    

    // function imagemessage(){
    //     return {
    //         restrict:  "E",
    //         scope: { msg: "=" },
    //         // template: '<div class="">' +
    //         // '<div class="rongcloud-Message-img">' +
    //         // '<span id="{{\'rebox_\'+$id}}"  class="rongcloud-Message-entry" style="">' +
    //         // // '<p>发给您一张示意图</p>' +
    //         // // '<img ng-src="{{msg.content}}" alt="">' +
    //         // '<a href="" target="_black"><img ng-src="{{msg.content}}"  data-image="{{msg.imageUri}}" alt=""/></a>' +
    //         // '</span>' +
    //         // '</div>' +
    //         // '</div>',
    //         template: '<div class="">' +
    //         '<div class="rongcloud-Message-img">' +
    //         '<span id="{{\'rebox_\'+$id}}" href class="rongcloud-Message-entry" style="cursor:pointer; max-height:240px;max-width:240px;border-radius:5px;">' +
    //         // '<a href="" style="max-height:240px;max-width:240px;display:inline-block;"></a>' +
    //         '</span>' +
    //         // '<a href="{{item.imageUri}}" download>下载</a>' +
    //         '</div>' +
    //         '</div>',
    //         link(scope: any, ele: angular.IRootElementService, attr: any) {
    //             // var abox = ele.find('a')[0];
    //             // var img = new Image();
    //             // img.src = scope.msg.imageUri;
    //             // setTimeout(function() {
    //             //     if (window["jQuery"] && window["jQuery"].rebox) {
    //             //         $('#rebox_' + scope.$id).rebox({ selector: 'a', zIndex: 999999, theme: "rebox" }).bind("rebox:open", function() {
    //             //             //jQuery rebox 点击空白关闭
    //             //             var rebox = <any>document.getElementsByClassName("rebox")[0];
    //             //             rebox.onclick = function(e: any) {
    //             //                 if (e.target.tagName.toLowerCase() != "img") {
    //             //                     var rebox_close = <any>document.getElementsByClassName("rebox-close")[0];
    //             //                     rebox_close.click();
    //             //                     rebox = null; rebox_close = null;
    //             //                 }
    //             //             }
    //             //         });
    //             //     }
    //             // });
    //             // img.onload = function() {
    //             //     scope.$apply(function() {
    //             //         scope.msg.content = scope.msg.imageUri
    //             //     });
    //             //     abox.style.width = img.width + 'px';
    //             //     abox.style.height = img.height + 'px';
    //             // }
                
    //             // if(window["jQuery"] && window["jQuery"].rebox){
    //             //     var rebox:any;
    //             //     $(abox).on('click',function(){
    //             //         if(!rebox){
    //             //             $(this).attr('href',scope.msg.imageUri);
    //             //             rebox = new $.rebox($(abox),{zIndex: 999999, theme: "rebox"});
    //             //             rebox.$el.bind("rebox:open", function() {
    //             //                 //jQuery rebox 点击空白关闭
    //             //                 var reboxContent = <any>document.getElementsByClassName("rebox")[0];
    //             //                 reboxContent.onclick = function(e: any) {
    //             //                     if (e.target.tagName.toLowerCase() != "img") {
    //             //                         var rebox_close = <any>document.getElementsByClassName("rebox-close")[0];
    //             //                         rebox_close.click();
    //             //                         rebox = null; rebox_close = null;
    //             //                     }
    //             //                 }
    //             //             });

    //             //             rebox.open();
    //             //         }
    //             //     });
    //             // }
    //             var base64img = new Image();
    //               base64img.src = scope.msg.content;
    //               // var abox=ele.find('a')[0];
    //               base64img.onload = function() {
    //                 var box = document.getElementById('rebox_' + scope.$id);
    //                 var pos = getBackgrund(base64img.width, base64img.height);
    //                 box.style.backgroundImage = 'url(' + scope.msg.content + ')';
    //                 box.style.backgroundSize = pos.w + 'px ' + pos.h + 'px';
    //                 box.style.backgroundPosition = pos.x + 'px ' + pos.y + 'px';
    //                 box.style.height = pos.h + 'px';
    //                 box.style.width = pos.w + 'px';
    //                 // abox.style.height = pos.h + 'px';
    //                 // abox.style.width = pos.w + 'px';
    //               }
    //               function getBackgrund(width: number, height: number) {

    //                 var isheight = width < height;
    //                 var scale = isheight ? height / width : width / height;
    //                 var zoom: number, x: number = 0, y: number = 0, w: number, h: number;
    //                 if (scale > 2.4) {
    //                   if (isheight) {
    //                     zoom = width / 100;
    //                     w = 100;
    //                     h = height / zoom;
    //                     y = (h - 240) / 2;
    //                   } else {
    //                     zoom = height / 100;
    //                     h = 100;
    //                     w = width / zoom;
    //                     x = (w - 240) / 2;
    //                   }
    //                 } else {
    //                   if (isheight) {
    //                     zoom = height / 240;
    //                     h = 240;
    //                     w = width / zoom;
    //                   } else {
    //                     zoom = width / 240;
    //                     w = 240;
    //                     h = height / zoom;
    //                   }
    //                 }
    //                 return {
    //                   w: w,
    //                   h: h,
    //                   x: -x,
    //                   y: -y
    //                 }
    //               }
    //         }
    //     }
    // }

    class voicemessage {
        static $inject: string[] = ["$timeout"];
        constructor(private $timeout: ng.ITimeoutService) {
            voicemessage.prototype["link"] = function(scope, ele, attr) {

                scope.msg.duration = parseInt(scope.msg.duration || scope.msg.content.length / 1024);

                RongIMLib.RongIMVoice.preLoaded(scope.msg.content);

                scope.play = function() {
                    RongIMLib.RongIMVoice.stop(scope.msg.content);
                    if (!scope.isplaying) {
                        scope.msg.isUnReade = false;
                        RongIMLib.RongIMVoice.play(scope.msg.content, scope.msg.duration);
                        scope.isplaying = true;
                        if (scope.timeoutid) {
                            $timeout.cancel(scope.timeoutid);
                        }
                        scope.timeoutid = $timeout(function() {
                            scope.isplaying = false;
                        }, scope.msg.duration * 1000);
                    } else {
                        scope.isplaying = false;
                        $timeout.cancel(scope.timeoutid);
                    }
                }

            }
        }

        restrict: string = "E";
        scope: any = { msg: "=" };
        template: string = '<div class="">' +
        '<div class="rongcloud-Message-audio">' +
        '<span class="rongcloud-Message-entry" style="">' +
        '<span class="rongcloud-audioBox rongcloud-clearfix " ng-click="play()" ng-class="{\'rongcloud-animate\':isplaying}" ><i></i><i></i><i></i></span>' +
        '<div style="display: inline-block;" ><span class="rongcloud-audioTimer">{{msg.duration}}”</span><span class="rongcloud-audioState" ng-show="msg.isUnReade"></span></div>' +
        '</span>' +
        '</div>' +
        '</div>';
    }
    class locationmessage {
        restrict: string = "E";
        scope: any = { msg: "=" };
        template: string = '<div class="">' +
        '<div class="rongcloud-Message-map">' +
        '<span class="rongcloud-Message-entry" style="">' +
        '<div class="rongcloud-mapBox">' +
        '<img ng-src="{{msg.content}}" alt="">' +
        '<span>{{msg.poi}}</span>' +
        '</div>' +
        '</span>' +
        '</div>' +
        '</div>';
    }
    class richcontentmessage {
        restrict: string = "E";
        scope: any = { msg: "=" };
        template: string = '<div class="">' +
        '<div class="rongcloud-Message-image-text">' +
        '<span class="rongcloud-Message-entry" style="">' +
        '<div class="rongcloud-image-textBox">' +
        '<h4>{{msg.title}}</h4>' +
        '<div class="rongcloud-cont rongcloud-clearfix">' +
        '<img ng-src="{{msg.imageUri}}" alt="">' +
        '<div>{{msg.content}}</div>' +
        '</div>' +
        '</div>' +
        '</span>' +
        '</div>' +
        '</div>';
    }

    angular.module("RongWebIMWidget.conversation")
        .directive("rongConversation", factory(rongConversation))
        .directive("emoji", factory(emoji))
        .directive("textmessage", factory(textmessage))
        .directive("includinglinkmessage", factory(includinglinkmessage))
        // .directive("imagemessage", imagemessage)
        .directive("imagemessage", factory(imagemessage))
        .directive("voicemessage", factory(voicemessage))
        .directive("locationmessage", factory(locationmessage))
        .directive("richcontentmessage", factory(richcontentmessage));
}
