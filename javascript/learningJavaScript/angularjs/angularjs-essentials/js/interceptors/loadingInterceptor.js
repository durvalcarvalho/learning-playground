angular.module('listaTelefonica').factory('loadingInterceptor', function ($q, $rootScope, $timeout) {
  return {
    request: function(request) {
      $rootScope.loading = true;
      return request;
    },
    requestError: function (requestError) {
      $rootScope.loading = false;
      return $q.reject(requestError);
    },
    response: function (response) {
      $timeout(function () {
        $rootScope.loading = false;
      }, 500);
      return response;
    },
    responseError: function (responseError) {
      $rootScope.loading = false;
      return $q.reject(responseError);
    },
  };
});