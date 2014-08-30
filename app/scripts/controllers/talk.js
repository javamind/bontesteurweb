'use strict';

angular.module('devoxxwebApp')
    .controller('TalkCtrl', function ($scope,Talks) {
        $scope.talks = Talks.query();

        $scope.levels = ['BEGINER', 'CONFIRMED','EXPERT'];

        //Definition de la fenetre de mise a jour
        $scope.dialogUpdate = {
            save: function () {
                if (!$scope.talk.id) {
                    if ($scope.talk.$save) {
                        $scope.talk.$save($scope.callbackEmpty, $scope.callbackError);
                    } else {
                        Talks.save($scope.talk, function(data){
                            $scope.error=null;
                            $scope.talks.push(data)
                        }, $scope.callbackError);
                    }
                }
                else {
                    $scope.talk.$update($scope.callbackEmpty, $scope.callbackError);
                }
                $('#dialogUpdate').modal('hide');
            },
            cancel: function () {
                $('#dialogUpdate').modal('hide');
            },
            launch: function (data) {
                $scope.talk = data ? data : {id: 0};
                $('#dialogUpdate').modal('show');
            }
        };

        //Definition de la fenetre de suppression
        $scope.delete = function (talk, $index, $event) {
            $event.stopPropagation();
            $scope.talks.splice($index, 1);
            Talks.delete(talk, $scope.callbackEmpty, $scope.callbackError);
        };


    });
