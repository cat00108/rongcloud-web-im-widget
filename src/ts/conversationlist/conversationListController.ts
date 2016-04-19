/// <reference path="../../../typings/tsd.d.ts"/>

var conversationListCtr = angular.module("RongWebIMWidget.conversationListController", []);

conversationListCtr.controller("conversationListController", ["$scope", "conversationListServer", "WebIMWidget", "widgetConfig", "providerdata",
    function($scope: any, conversationListServer: conversationListServer, WebIMWidget: WebIMWidget, widgetConfig: widgetConfig, providerdata: providerdata) {
        $scope.conversationListServer = conversationListServer;
        $scope.WebIMWidget = WebIMWidget;
        conversationListServer.refreshConversationList = function() {
            setTimeout(function() {
                $scope.$apply();
            });
        }

        $scope.minbtn = function() {
            WebIMWidget.display = false;
        }
        var checkOnlieStatus: any;

        function refreshOnlineStatus() {
            var arr = conversationListServer.conversationList.map(function(item) { return item.targetId });
            providerdata.getOnlineStatus(arr, {
                onSuccess: function(data) {
                    conversationListServer._onlineStatus = data;
                    conversationListServer.updateConversations();
                }
            })
        }

        function startCheckOnline() {
            if (widgetConfig.displayConversationList && providerdata.getOnlineStatus) {
                checkOnlieStatus = setInterval(function() {
                    refreshOnlineStatus();
                }, 10 * 1000);
            }
        }
        function stopCeckOnline() {
            clearInterval(checkOnlieStatus);
        }

        $scope.connected = true;

        conversationListServer._onConnectStatusChange = function(status: any) {
            if (status == RongIMLib.ConnectionStatus.CONNECTED) {
                $scope.connected = true;
                refreshOnlineStatus();
                startCheckOnline();
            } else {
                $scope.connected = false;
            }
            setTimeout(function() {
                $scope.$apply();
            })
        }
    }])
