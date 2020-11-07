app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];

  $scope.mains = [
    {
      name: 'BATATA FRITA',
      description: '270g de batata frita.',
      price: 15.99
    },
    {
      name: 'FILÉ MIGNON',
      description: '360g de filé-mignon em tiras. Acompanha batata frita ou mandioca.',
      price: 35.99
    },
    {
      name: 'MISTA',
      description: '120g de iscas de filé de frango, 160g de calabresa acebolada e 250g de picanha premium. Acompanha batata frita ou mandioca.',
      price: 29.99
    }
  ];

  $scope.extras = [
    {
      name: 'BREADSTICKS',
      description: 'Served with marinara sauce.',
      price: 4.95
    },
    {
      name: 'SOUP OF THE DAY',
      description: 'Take a chance.',
      price: 4.95
    },
    {
      name: 'BUFFALO WINGS',
      description: 'Feel the power of wings.',
      price: 6.95
    }
  ];


}]);