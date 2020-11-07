app.controller('BookController', ['$scope', 'books', '$routeParams', 
  function($scope, books, $routeParams) {
    books.success(function(data) {
      let index = parseInt($routeParams.bookId);
      $scope.book = data[index];
      $scope.currentBookIndex = index;
    });
  }
]);
