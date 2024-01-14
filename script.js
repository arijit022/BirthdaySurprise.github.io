const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0]);
  e.target.matches('.prev') && slider.append(items[items.ngth -1]);
}
document.addEventListener('click',activate,false);

var mysong = document.getElementById("mysong");
var icon = document.getElementById("icon");
icon.onclick = function(){
   if(mysong.paused){
    mysong.play();
    icon.src = "pause.png";
   }else{
    mysong.pause();
    icon.src = "play-button.png";
   }
}