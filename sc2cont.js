let index;
let randAd;
let start;

let ad;


function adAdd(){

  index = int(random(0,2));
  
  if (index != imgInit.index){
    
    randAd = index;
    ad = sets[randAd].ad;
    
    adgoeshere.child(ad);
    ad.size(winWidth*0.8, winHeight*0.8);
    ad.position(winWidth*0.1,winHeight*0.1);

  }
}

function remov(){
  ad.remove();
}