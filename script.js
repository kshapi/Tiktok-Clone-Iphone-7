const video = document.querySelector('video');
const section = document.querySelector('section');
const play = document.querySelector('.fa-play');
const like = document.querySelector('.fa-heart');
const save = document.querySelector('.fa-bookmark');
const song = document.querySelector('.song');
const track = document.querySelector('.range input');

let X;
let Y;
//set track value to video.duration
//When video is loaded
video.onloadeddata = () => {
  track.max = video.duration;
}
section.addEventListener('click',tiktok);
//paly video
function tiktok(){
      setInterval(tiktok,900);
      if(video.paused == true){
        video.play();
        play.style.display = 'none';
        song.classList.add('active');
      }//else{you can add a pause Btn in else}
      
      //update track when video playing
      track.value =video.currentTime;
}
//for like
section.addEventListener('dblclick',(e)=> {
      like.style.color = 'red';
      X = e.offsetX;
      Y = e.offsetY;
      //create like element and append it to section
      let heart = document.createElement('i');
      heart.setAttribute('class', 'fa-solid fa-heart');
      heart.id = 'taptolike';
      section.appendChild(heart);
      //y off set
      heart.style.top = `${Y -100}px`;
      //x off set
      heart.style.left = `${X -50}px`;
      //remove element after 300ms
      setTimeout(() => {
        heart.remove();
      },300);
 });
//like button
like.addEventListener('click',(e)=> {
      e.stopPropagation();
      if(like.hasAttribute('style')){
        like.style.color = 'var(--text)';
        like.removeAttribute('style')
      }else {
        like.style.color = 'red';
      }
 });
//save button
save.addEventListener('click',(e)=> {
      e.stopPropagation();
      if(save.hasAttribute('style')) {
         save.style.color = 'var(--text)';
         save.removeAttribute('style')
      }else {
         save.style.color = 'yellow';
      }
  });
  
  track.addEventListener('input',()=>{
    video.currentTime = track.value;
    tiktok();
  });
  
  //kshapi