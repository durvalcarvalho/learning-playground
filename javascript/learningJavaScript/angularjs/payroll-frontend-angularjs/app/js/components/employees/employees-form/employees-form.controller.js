angular.module('payroll').controller('EmployeesFormController', function(employeesAPI, $location) {
  const self = this;

  self.addEmployee = function(employee) {

    employeesAPI.postEmployee(employee)
      .then(
        function success(response) {
          delete employee;
          $location.path('/employees')
        },
        function error(response) {
          console.log("fail to create");
        })
  }
}); 