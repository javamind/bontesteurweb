'use strict';

angular.module('devoxxwebApp')
  .service('Speakers', function Speakers($resource, constants) {
        return $resource(constants.urlserver + 'speaker/:id', { id: '@_id' },
            {
                'get':    {method:'GET'},
                'save':   {method:'POST'},
                'update': {method:'PUT'},
                'query':  {method:'GET', isArray:true},
                'delete': {method:'DELETE'}
            });
  });
