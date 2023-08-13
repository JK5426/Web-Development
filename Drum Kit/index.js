let totalButton = document.querySelectorAll(".drum").length;

for(let i=0;i<totalButton;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    this.classList.toggle('pressed');
    drumSound(this.textContent);
  })
}

document.addEventListener('keydown',function(event){
  drumSound(event.key);
})

function drumSound(textContent){
    switch (textContent) {
      case 'w':
        new Audio('./sounds/tom-1.mp3').play();
        break;
      case 'a':
        new Audio('./sounds/tom-2.mp3').play();
        break;
      case 's':
        new Audio('./sounds/tom-3.mp3').play();
        break;
      case 'd':
        new Audio('./sounds/tom-4.mp3').play();
        break;
      case 'j':
        new Audio('./sounds/snare.mp3').play();
        break;
      case 'k':
        new Audio('./sounds/crash.mp3').play();
        break;
      case 'l':
        new Audio('./sounds/kick-bass.mp3').play();
        break;  
      default:
        break;
    }
  }
document.addEventListener("keydown",function(event){
  console.log(event.key);
})