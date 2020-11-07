angular.module('payroll').controller('EmployeesTableController', function(employeesAPI) {

  var self = this;

  self.getEmployees = function() {
    employeesAPI.getEmployees()
      .then(
        function success(response) {
          self.employees = response.data._embedded.employeeList;
        },
        function error(response) {
          console.log('error', response);
        }
      );
  }

  self.deleteEmployees = function(employees) {
    employees.forEach( employee => {
      if(employee.selected === true) {
        employeesAPI.deleteEmployee(employee.id);
      }
    });
    self.getEmployees();
  }

  self.getEmployees();
});