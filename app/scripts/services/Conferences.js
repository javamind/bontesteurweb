'use strict';

angular.module('devoxxwebApp')
  .service('Conferences', function Conferences($resource, constants) {
        return $resource(constants.urlserver + 'conference/:id', { id: '@_id' },
            {
                'get':    {method:'GET'},
                'save':   {method:'POST'},
                'update': {method:'PUT'},
                'query':  {method:'GET', isArray:true},
                'delete': {method:'DELETE'}
            });
  });
