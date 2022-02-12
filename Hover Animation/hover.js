const links = document.querySelectorAll('.container a');
const bg = document.querySelector('.bg');
const showClass = 'bg-show';

for(const link of links){
    const img = new Image();
    img.src = link.dataset.bg;
    
    link.addEventListener('mouseenter',function(){
        bg.style.backgroundImage = `url(${this.dataset.bg})`;
        document.body.classList.add(showClass);
    });
    
    link.addEventListener('mouseleave',function(){
        document.body.classList.remove(showClass);
    });
    
}//for 반복문

//var a = 40;
//var b = 5;
//var c = '자바스크립트';
//var str = '나는'+(a+b)+'살이고';
//let str = `나는 ${a+b}살이고`