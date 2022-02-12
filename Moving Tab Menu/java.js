///////////////////////////제이쿼리일때//////////////////////////////////////////////

/*
var test = $('.tab-menu li:nth-child(2)').offset().left; //화면기준
var test2 = $('.tab-menu li:nth-child(2)').position().left; //기준요소
console.log(test2);
//A.position().left A요소의 부모중에 position 기본값이 아닌 요소로부터의 거리
*/


//var tabLink = $('.tab-menu li');
//var hightLight = $('.highlight');
//
//tabLink.click(function(){
//    var targetLeft = $(this).position().left;
//    hightLight.animate({left:targetLeft});
//})




///////////////////////자바스크립트일때////////////////////////
var tabLink = document.querySelectorAll('.tab-menu li a');
var hightLight = document.querySelector('.highlight');


for(link of tabLink){
    link.addEventListener('click',function(e){
        e.preventDefault();
        var targetLeft = this.offsetLeft;
        hightLight.style.left = targetLeft + "px";
        e.target.classList.add('active');
     
    })
}






