angular.module('payroll').controller('OrdersTableController', function(ordersAPI) {

  var self = this;

  self.getOrders = function() {
    ordersAPI.getOrders()
      .then(
        function success(response) {
          self.orders = response.data._embedded.orderList;
        },
        function error(response) {
          console.log('error', response);
        }
      );
  };

  self.cancelOrder = function(orders) {
    orders.forEach(order => {
      if(order.selected === true) {
        ordersAPI.cancelOrder(order.id);
      }
    });
    
    delete orders;
    self.getOrders();
  }

  self.completeOrder = function(orders) {
    orders.forEach(order => {
      if(order.selected === true) {
        ordersAPI.completeOrder(order.id);
      }
    });

    delete orders;
    self.getOrders();
  }

  self.getOrders();
});