angular.module('payroll').factory('employeesAPI', function($http, config) {
  
  var _getEmployees = function() {
    return $http.get(config.baseUrl + '/api/employees');
  };

  var _getEmployee = function(id) {
    return $http.get(`${config.baseUrl}/api/employees/${id}`);
  };

  var _postEmployee = function(employee) {
    return $http.post(config.baseUrl + '/api/employees', employee);
  };

  var _deleteEmployee = function(id) {
    return $http.delete(`${config.baseUrl}/api/employees/${id}`);
  };

  return {
    getEmployees: _getEmployees,
    getEmployee: _getEmployee,
    postEmployee: _postEmployee,
    deleteEmployee: _deleteEmployee,
  };
});