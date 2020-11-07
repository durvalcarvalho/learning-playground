angular.module('payroll').factory('timestampInterceptor', function() {
  return {
    request: function(config) {
      const url = config.url;

      if(url.indexOf('api') === -1) return config;

      const timestamp = new Date().getTime();
      config.url = url + "?timestamp=" + timestamp;

      console.log(config.url);

      return config;
    }
  }
})