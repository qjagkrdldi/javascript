document.addEventListener('click',lightbox);

function lightbox(ev){
    ev.preventDefault();
    var elem = ev.target, //클릭한 그 요소가 무엇인지 elem에 저장
        elemId = elem.getAttribute('id'), //클릭한 요소의 id명을 elemId에 저장
        lightBoxImg = document.getElementById('lightbox-image'),
        lightBox = document.getElementById('lightbox-overlay'),
        newImg = new Image();  //새로운 이미지요소를 생성
    /*
        var img = new Image();
        img.src ="새로운값"
        
        A.src = "b" A 요소의 src의 속성의 값을 b로 교체한다.
        
        
        A.getAttribute(b) = A요소의 b라는 속성의 값을 가져온다.
        A.hasAttribute(b) = A요소가 b라는 속성이 있는지 없는지. true, false
        .onload 화면에 로드가 되면 할일
    */
    
    if(elem.hasAttribute('data-lightbox')){
            ev.preventDefault();



                newImg.onload = function(){    //이미지가 로드되면
                    lightBoxImg.src = this.src;  //새로생성된 이미지에 src 속성을 빈속성을 넣는다.
                }


            newImg.src = elem.getAttribute('data-lightbox'); //data-lightbox의 값을 가져온다.
            lightBox.classList.add('visible');
            //console.log(elem.getAttribute('data-lightbox'));
       
       }
        if(elemId == 'lightbox-overlay' || elemId == 'lightbox-image'){
           lightBox.classList.remove('visible');
           }
    
    
}

