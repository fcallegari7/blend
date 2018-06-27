const gridItems = document.querySelectorAll('.grid-item');
const modeToggle = document.querySelector('.mode-panel-toggle');
const closePanes = document.querySelector('.close-panes');
const modePanel = document.querySelector('mode-panel-container');
const theModeForm = document.querySelector('form');
const colorPicker = document.querySelector(".color-input");
const body = document.body;

const potentialImages = [
  'http://picsum.photos/1000/1000/?random',
  'http://picsum.photos/1000/1000/?random',
  'http://picsum.photos/g/1000/1000/?random',
  'http://picsum.photos/1000/1000/?blur',
  'http://picsum.photos/1000/1000/?random?blur',
  'http://picsum.photos/1000/1000/?gravity=center',
  'http://picsum.photos/2000/1000/?gravity=center',
  'http://picsum.photos/800/1000/?gravity=center',
  'http://picsum.photos/1400/1200/?gravity=center',
  'http://picsum.photos/1600/1200/?gravity=center',
  'http://picsum.photos/1000/700/?gravity=south',
  'http://picsum.photos/1000/400/?gravity=west',
  'http://picsum.photos/1200/1000/?gravity=east',
  'http://picsum.photos/g/1000/1000/?random',
  'http://picsum.photos/g/1600/1000/?random',
  'http://picsum.photos/g/2400/1200/?random',
  'http://picsum.photos/g/1600/1900/?random'
];




initialSetup();

modeToggle.addEventListener('click', function(){
  body.classList.toggle('open-menu');
});

closePanes.addEventListener('click', function(){
  const openPanes = document.querySelectorAll('.open');

  openPanes.forEach(function(pane){
    pane.classList.remove('open');
  });

});


theModeForm.addEventListener('change', function(){
  const blendMode = this.querySelector('input:checked').value;
  body.style.setProperty('--blendMode', blendMode);
})

colorPicker.addEventListener('change', function(){
  setBgColor(this.value);
})

function initialSetup () {

  for (let i=0; i<gridItems.length; i++) {

      gridItems[i].style.backgroundColor = randBgColor();
      gridItems[i].style.backgroundImage = randBgImg();

      gridItems[i].addEventListener('click', function(){
          const thisBg = this.style.backgroundColor;
          this.querySelector('.item-description').style.backgroundColor = thisBg;
          this.classList.toggle('open');
      });
  }
}

function randBgColor(){

  const hue = Math.round(Math.random() * 360);
  const sat = Math.round(Math.random() * 80) + 10;
  const light = Math.round(Math.random() * 70) + 20;

  const hsl = `hsl(${hue},${sat}%,${light}%)`;

  return (hsl);
}

function randBgImg() {
    const randImg = Math.floor(Math.random() * potentialImages.length);
    const randImgURL = `url('${potentialImages[randImg]}')`;
    return randImgURL;
}


function setBgColor(value){
  gridItems.forEach(function(griditem){
    griditem.style.backgroundColor = value;
  });
}
