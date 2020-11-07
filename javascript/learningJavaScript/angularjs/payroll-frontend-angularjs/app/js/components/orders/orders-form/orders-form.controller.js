angular.module('payroll').controller('OrdersFormController', function(ordersAPI, $location) {
  const self = this;

  self.addOrder = function(order) {
    order.status = "IN_PROGRESS";
    ordersAPI.postOrder(order).then(
      function success(response) {
        delete order;
        $location.path('/orderTable')
      },
      function error(response) {
        console.log("fail to create");
      })
  }
}); 