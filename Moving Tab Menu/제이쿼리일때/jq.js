

var test = $('.tab-menu li:nth-child(2)').offset().left; //화면기준
var test2 = $('.tab-menu li:nth-child(2)').position().left; //기준요소

//A.position().left A요소의 부모중에 position 기본값이 아닌 요소로부터의 거리



var tabLink = $('.tab-menu li');
var hightLight = $('.highlight');

tabLink.click(function(){
   var targetLeft = $(this).position().left;
    hightLight.animate({left:targetLeft});
})

