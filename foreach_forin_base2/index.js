var $menu1 = document.querySelectorAll('.menu1 li');
var $menu2 = document.querySelectorAll('.menu2 li');
var $menu3 = document.querySelectorAll('.menu3 li');
var $menu4 = document.querySelectorAll('.menu4 li');
//반복문을 이용하여 리스트의 색상을 blue로 변경한다.

// for 
for(i=0; i<$menu1.length; i++){
    $menu1[i].style.color = "blue";
    $menu1[i].addEventListener('mouseenter',function(){
        this.style.color='red';
    })
    $menu1[i].addEventListener('mouseleave',function(){
        this.style.color='blue';
    })
}

// forEach
$menu2.forEach(function(item,index){
    item.style.color = "blue";
    item.addEventListener('mouseenter',function(){
        this.style.color='red';
    })
    item.addEventListener('mouseleave',function(){
        this.style.color='blue';
    })
})

//for in for of
var x;
for(x of $menu3){
    x.style.color = "blue";
    x.addEventListener('mouseenter',function(){
        this.style.color='red';
    })
    x.addEventListener('mouseleave',function(){
        this.style.color='blue';
    })
    
}


//do / while
var y = 0;
do{$menu4[y].style.color = "blue";
   $menu4[y].addEventListener('mouseenter',function(){
        this.style.color='red';
    })
    $menu4[y].addEventListener('mouseleave',function(){
        this.style.color='blue';
    })
   y++;
    
}while(y < $menu4.length);




