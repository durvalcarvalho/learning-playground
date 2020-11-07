angular.module('listaTelefonica').filter('upper', function () {
  
  var co = 0;

  return function(input) {

    console.log(++co);

    if(!input) return;

    return input.toUpperCase();
  }
});