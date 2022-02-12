var img = document.querySelectorAll('.gallery img'),
    lightbox = document.querySelector('#lightbox-overlay'),
    lightboxImg = lightbox.querySelector('img');

    console.log(img);

    
    for(var i=0; i < img.length; i++){
        
        img[i].addEventListener('click',function(){
            var imgNewSrc = this.getAttribute('data-lightbox');
            console.log(imgNewSrc);
            
            lightboxImg.setAttribute('src',imgNewSrc);
            lightbox.classList.add('visible');
        
    });
        
    }
    
    lightbox.addEventListener('click',function(){
         lightbox.classList.remove('visible');
    })


    