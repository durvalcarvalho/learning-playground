angular.module('payroll')
  .config(function($routeProvider, $httpProvider) {
    $routeProvider
      .when('/employeesTable', {
        templateUrl: 'pages/employees-table.html'
      })
      .when('/EmployeeForm', {
        templateUrl: 'pages/employees-form.html'
      })
      .when('/ordersTable', {
        templateUrl: 'pages/orders-table.html'
      })
      .when('/ordersForm', {
        templateUrl: 'pages/orders-form.html'
      })
      .otherwise('/ordersTable');

    $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  });