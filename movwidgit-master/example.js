angular.module('plunker', ['ui.bootstrap']);
function CarouselDemoCtrl($scope) {
  $scope.myInterval = 5000;
   $scope.slides = [
    {image: '0001.jpg',text: '21 and Over'},
    {image: '0002.jpg',text: '42 the Jackie Robinson Story'},
    {image: '0003.jpg',text: 'American Horror Story ASYLUM'},
    {image: '0004.jpg',text: 'Alex Cross'},
    {image: '0005.jpg',text: 'Assault On Wall Street'},
    {image: '0006.jpg',text: 'BoardWalk Empire: Season One'},
    {image: '0008.jpg',text: 'BoardWalk Empire: Season Two'}
      
  ];
 
}