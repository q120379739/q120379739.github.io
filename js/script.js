var slideIndex = 0;
showSlides();
// var audio = document.getElementById('audios');
// audio.play()
// document.addEventListener('touchstart', function () {
//     function audioAutoPlay() {
//         var audio = document.getElementById('audios');
//             audio.play();
//     }
//     audioAutoPlay();
// });
// 
$(function(){//iphone自动播放音乐
            $("#audio")[0].play();
        })
    
	
function toggleSound() {
            var music = document.getElementById("audios");//获取ID  
                console.log(music);
                console.log(music.paused);
            if (music.paused) { //判读是否播放  
                music.paused=false;
                music.play(); //没有就播放
            }  
            
        }

setInterval("toggleSound()",1);

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 12000); // 图片切换时间
}