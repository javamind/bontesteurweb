'use strict';

angular.module('devoxxwebApp', [
        'ngResource',
        'ngRoute'
    ])
    .constant('constants', {
            urlserver : 'http://localhost:8081/conference/'
        }
    )
    .run(function ($rootScope) {
        $rootScope.callbackEmpty = function(){
            $rootScope.error=null;
        };
        $rootScope.callbackError = function(data){
            $rootScope.error= { message : data.data, code : data.status};
        };
        //Definition de la fenetre de mise a jour
        $rootScope.dialogAbout = {
            cancel: function () {
                $('#dialogAbout').modal('hide');
            },
            launch: function () {
               $('#dialogAbout').modal('show');
            }
        };
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/conference', {
                templateUrl: 'views/conference.html',
                controller: 'ConferenceCtrl'
            })
            .when('/talk', {
                templateUrl: 'views/talk.html',
                controller: 'TalkCtrl'
            })
            .when('/speaker', {
                templateUrl: 'views/speaker.html',
                controller: 'SpeakerCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
