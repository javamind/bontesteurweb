'use strict';

angular.module('devoxxwebApp')
    .controller('ConferenceCtrl', function ($scope, Conferences) {
        $scope.conferences = Conferences.query();

        //Definition de la fenetre de mise a jour
        $scope.dialogUpdate = {
            save: function () {
                if(!$scope.conference.id){
                    if ($scope.conference.$save) {
                        $scope.conference.$save($scope.callbackEmpty, $scope.callbackError);
                    } else {
                        Conferences.save($scope.conference, function(data){
                            $scope.error=null;
                            $scope.conferences.push(data)
                        }, $scope.callbackError);
                    }
                }
                else{
                    $scope.conference.$update($scope.callbackEmpty, $scope.callbackError);
                }
                $('#dialogUpdate').modal('hide');
            },
            cancel: function () {
                $('#dialogUpdate').modal('hide');
            },
            launch: function (data) {
                $scope.conference = data ? data : {id: 0};
                $('#dialogUpdate').modal('show');
            }
        };

        //Definition de la fenetre de suppression
        $scope.delete = function (conference, $index, $event) {
            $event.stopPropagation();
            $scope.conferences.splice($index, 1);
            Conferences.delete(conference,$scope.callbackEmpty, $scope.callbackError);
        };

    });
