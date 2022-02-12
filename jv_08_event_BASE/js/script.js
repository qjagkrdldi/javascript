var btn = document.getElementById('submit');
    container = document.querySelector('.container');

    btn.addEventListener('click',function(){
        btn.style.color = 'red';
    });

    container.addEventListener('mouseover',function(){
        console.log('마우스올림');
    });

    container.addEventListener('mouseleave',function(){
        console.log('마우스벗어남');
    });

    window.addEventListener('keydown',function(event){
        console.log(event.key);
        console.log(event.keyCode);
    })

