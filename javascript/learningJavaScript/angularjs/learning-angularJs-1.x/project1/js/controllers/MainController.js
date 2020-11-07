app.controller('MainController', [ '$scope', 
  function($scope) {
    $scope.title = 'Coronga Vairus';
    $scope.promo = 'pague 2 leve 1';
    $scope.products = [
      { 
        name: 'The Book of Trees', 
        price: 19, 
        pubdate: new Date('2014', '03', '08'), 
        cover: 'img/the-book-of-trees.jpg',
        likes: 0,
        dislikes: 0
      },
      { 
        name: 'Program or be Programmed', 
        price: 8, 
        pubdate: new Date('2013', '08', '01'), 
        cover: 'img/program-or-be-programmed.jpg',
        likes: 0,
        dislikes: 0
      },
      { 
        name: 'O jeito harvard de ser feliz', 
        price: 40, 
        pubdate: new Date('2019', '08', '01'), 
        cover: 'img/program-or-be-programmed.jpg',
        likes: 0,
        dislikes: 0
      },
      { 
        name: 'Pai Rico, Pai Pobre', 
        price: 30, 
        pubdate: new Date('200', '08', '01'), 
        cover: 'img/program-or-be-programmed.jpg',
        likes: 0,
        dislikes: 0
      },
    ]

    $scope.plusOne = function(index) {
      $scope.products[index].likes += 1;
    };

    $scope.minusOne = function(index) {
      $scope.products[index].dislikes += 1;
    };


    

  }]);