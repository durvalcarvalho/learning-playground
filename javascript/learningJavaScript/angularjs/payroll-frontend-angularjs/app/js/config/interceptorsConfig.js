angular.module('payroll').config(function ($httpProvider) {
  $httpProvider.interceptors.push('timestampInterceptor');
});