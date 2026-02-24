//storage for the main art 

let stop = false;
let imgInit;

let sets = [];

let set1 = {};
let set2 = {};

let img1;
let img2;

let ad1;
let ad2;

set1 = {index:0, art:img1, source:"testwork.jpg"};
set2 = {index:1, art:img2, source:"testwork2.jpg"};

sets = [set1,set2];

function preload(){
  
  set1.art = loadImage(set1.source);
  set2.art = loadImage(set2.source);
}


function showArt() {
  
  if (stop === false){
    imgInit = sets[int(random(0,2))];
    stop = true;
  }
  image(imgInit.art,windowWidth/2,windowHeight/2, windowWidth*0.7, windowHeight*0.7);
  
}
