

// Image Galery
let individualImages = [
  'Img18.jpeg', 
  'img1.jpeg', 
  'Img3.jpeg', 
  'Img13.jpeg', 
  'Img4.jpeg', 
  'Img6.jpeg', 
  'Img7.jpeg', 
  'Img14.jpeg', 
  'Img2.jpeg', 
  'Img9.jpeg',
  'Img8.jpeg', 
  'Img15.jpeg', 
  'Img10.jpeg', 
  'Img12.jpeg',
  'Img16.jpeg', 
  'Img20.jpeg', 
];

let imageDescription = [
  "Nature's masterpiece",
  "Tranquil reflections",
  "A colorful crossing",
  "Where earth meets sky",
  "Serenity in blue",
  "The climb of a lifetime",
  "Dreams above the water",
  "A splash of serenity",
  "A canvas of nature",
  "Whispers of green",
  "Nature's forgotten treasures",
  "A cozy retreat",
  "Nature's layered delight",
  "Majestic heights",
  "Wild encounters await",
  "Intricate green beauty",
];

function openOverlay(index){
  let overlayRef = document.getElementById('myModalWhindow');
  overlayRef.style.display = "flex";
  let overlayContent = document.getElementById('image__Galery');
  overlayContent.innerHTML = "";
  overlayContent.innerHTML += getDialogTemplate(index);
}

function closeOverlay(){
  let overlayRef = document.getElementById('myModalWhindow');
  overlayRef.style.display = "none";
}

function forward(input){
  input++;
  if (input === individualImages.length){
      return openOverlay(0);
  } 
  return openOverlay(input);
}

function backward(i){
  if (i === 0){
      return openOverlay(individualImages.length - 1);
  }
  i--;
  return openOverlay(i);
}

// Get the scroll button:
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}


function preventBubbeling(event) {
  event.stopPropagation();
}  

// HTML
function getDialogTemplate(index){
  return /*html*/`
  <div class="modalContent">
  <div class="closeUnit">
          <button class="close" onclick="closeOverlay()"></button>     
  </div>
  <div class="imagePostion">
      <div>${imageDescription[index]}</div>
  </div>
  
  <div id="image__Galery" class="image__Galery">
  <img class="modalImg" src="./assets/img/${individualImages[index]}" alt="test">
  </div>
  <div class="btnLocation">
  <div class="btnPostion">
      <button id="buttonBackward" class="arrowLeft" onclick="backward(${index})"></button>
      <span>${index + 1} / ${individualImages.length}</span>
      <button id="buttonForward" class="arrowRight" onclick="forward(${index})"></button>
</div>
</div>`
}


