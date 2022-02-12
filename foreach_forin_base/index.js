var fruits = ["apple", "orange", "cherry"];
// for 
for(i = 0; i<fruits.length; i++){
    document.getElementById('for').innerHTML = '<li>' + fruits[i] + '</li>';
}
// forEach
fruits.forEach(function(item, index){
    document.getElementById('foreach').innerHTML = '<li>' + item + '</li>';
})

// for of
var item;
for(item of fruits){
     document.getElementById('forof').innerHTML = '<li>' + item + '</li>';
}


//for in (객체내의 값들마다 할일) 객체 = 변수(property) + 함수(method)
var person = {pname:'홍길동',page:'200',pgender:'남성'};
var x;

for(x in person){
    document.getElementById('forin').innerHTML += '<li>' + x + ':' + person[x] +'</li>';
}

//do / while
var y = 0;
do{
    document.getElementById('dowhile').innerHTML += '<li>' + fruits[y] + '</li>';
    y++;
}while (y < fruits.length);
   
















