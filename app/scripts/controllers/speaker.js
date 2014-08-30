'use strict';

angular.module('devoxxwebApp')
    .controller('SpeakerCtrl', function ($scope, Speakers) {
        $scope.speakers = Speakers.query();

        //Definition de la fenetre de mise a jour
        $scope.dialogUpdate = {
            save: function () {
                if (!$scope.speaker.id) {
                    if ($scope.speaker.$save) {
                        $scope.speaker.$save($scope.callbackEmpty, $scope.callbackError);
                    } else {
                        Speakers.save($scope.speaker, function(data){
                            $scope.error=null;
                            $scope.speakers.push(data)
                        }, $scope.callbackError);
                    }
                }
                else {
                    $scope.speaker.$update($scope.callbackEmpty, $scope.callbackError);
                }
                $('#dialogUpdate').modal('hide');
            },
            cancel: function () {
                $('#dialogUpdate').modal('hide');
            },
            launch: function (data) {
                $scope.speaker = data ? data : {id: 0};
                $('#dialogUpdate').modal('show');
            }
        };

        //Definition de la fenetre de suppression
        $scope.delete = function (speaker, $index, $event) {
            $event.stopPropagation();
            $scope.speakers.splice($index, 1);
            Speakers.delete(speaker,$scope.callbackEmpty, $scope.callbackError);
        };
    });
