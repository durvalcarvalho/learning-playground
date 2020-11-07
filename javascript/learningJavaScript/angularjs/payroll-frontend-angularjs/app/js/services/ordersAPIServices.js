angular.module('payroll').factory('ordersAPI', function($http, config) {
  
  var _getOrders = function() {
    return $http.get(config.baseUrl + '/api/orders');
  };

  var _postOrder = function(order) {
    return $http.post(config.baseUrl + '/api/orders', order);
  };

  var _cancelOrder = function(id) {
    return $http.delete(`${config.baseUrl}/api/orders/${id}/cancel`);
  };

  var _completeOrder = function(id) {
    return $http.put(`${config.baseUrl}/api/orders/${id}/complete`);
  };

  return {
    getOrders: _getOrders,
    cancelOrder: _cancelOrder,
    postOrder: _postOrder,
    completeOrder: _completeOrder,
  };
});