app.controller('ChapterController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams) {
  books.success(function(data) {
    let bookId = parseInt($routeParams.bookId);
    $scope.book = data[bookId];

    let chapterId = $routeParams.chapterId;
    $scope.chapter = $scope.book.chapters[chapterId];

    if($routeParams.chapterId >= $scope.book.chapters.length - 1) {
      $scope.nextChapterIndex = "#";
    }
  });

  $scope.currentBookIndex = parseInt($routeParams.bookId);
  $scope.currentChapterIndex = parseInt($routeParams.chapterId);
  $scope.nextChapterIndex = $scope.currentChapterIndex + 1;
}]);
