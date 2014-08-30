'use strict';

angular.module('devoxxwebApp')
  .service('Talks', function Talks($resource, constants) {
        return $resource(constants.urlserver + 'talk/:id', { id: '@_id' },
            {
                'get':    {method:'GET'},
                'save':   {method:'POST'},
                'update': {method:'PUT'},
                'query':  {method:'GET', isArray:true},
                'delete': {method:'DELETE'}
            });
  });
