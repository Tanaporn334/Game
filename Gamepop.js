window.onload=function(){
    var img = document.getElementById("popver1");
    var audio = new Audio("h1.mp3");

    img.addEventListener('mousedown', function(){
        img.src ='img/pop2.jpg'
        audio.play();

    })
    img.addEventListener('mouseup', function(){
        img.src="img/pop1.jpg"
        audio.play();
    })
}
