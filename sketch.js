let winWidth = 300;
let winHeight = 300;
let posX;
let posY;
let canvas1;
let screen1;
let screen2;
let screen3;//hidden
let adgoeshere;
let adbg;
let closeBtn;
let openAdBtn;
let body;
let adtimer = 0;
let adlimit = 50;



function setup() {
  
  frameRate(15);

  canvas1 = createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  screen1 = createDiv();
  screen1.id("sc1");
  screen1.style("background-color", "#A78989");
  
  artgoeshere = createDiv();
  artgoeshere.id("art");
  
  screen1.child(artgoeshere);
  screen1.child(canvas1);
// base display (art)  


  screen2 = createDiv();
  screen2.id("sc2");
  
  adgoeshere = createDiv();
  adgoeshere.id("adgoeshere");
  adgoeshere.size(winWidth,winHeight);
  adgoeshere.center();
  adgoeshere.style("background-color", "#A7A7A7");
  
  adbg = createDiv();
  adbg.id("adbg");
  adbg.size(windowWidth,windowHeight);
  adbg.position(0,0)
  adbg.style("background-color", "#242683");
  adbg.style("opacity",0.5)
  
  closeBtn = createButton("close");
  closeBtn.id("close");
  closeBtn.position(450,500);
  
  
  openAdBtn = createButton("open");
  openAdBtn.id("open");
  
  

  screen2.child(adbg);
  screen2.child(adgoeshere);
  screen2.child(closeBtn);
  screen2.child(openAdBtn);
  // ads

  
  body = select('body');
  body.child(screen1);
  body.child(screen2);  
  
  screen2.hide();
  
ad1 = createImg("testwork.jpg", "desc");
ad2 = createImg("testwork2.jpg", "desc");

set1.ad = ad1;
set2.ad = ad2;
  
screen3 = createDiv();
screen3.id("sc3");
screen3.hide();

screen3.child(ad1);
screen3.child(ad2);
  
}

function draw() {
  
  showArt();
  adtimer ++;
  
  if (adtimer > adlimit){
    screen2.show();
    adAdd();
    ad.mouseClicked(open);
    
  }
  
  closeBtn.mouseClicked(close);
  openAdBtn.mouseClicked(open);
  




  
}

function close(){
  screen2.hide();
  adtimer = 0;
  adlimit = random(25,75);
}

function open(){
  clear();
  screen2.hide();
  remov();
  adtimer = 0;
  adlimit = random(25,75);
  
  imgInit = sets[randAd];

}
