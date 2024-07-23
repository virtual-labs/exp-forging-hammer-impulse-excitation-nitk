﻿function runPage2() {
  background(255);
  // image(bg, 0, 0);


  if(spring1.x1==spring1.x2)
    {

    textFont("Nunito', sans-serif");
    textSize(17);
    strokeWeight(0); 
    text("MODE SHAPE", 250, 20);
    // textSize(10);
    text("When the initial excitation is given same to both masses in same direction, it",30,150);
    text("gives only the first mode shape of the system",150,170);
    strokeWeight(2.5);
    stroke(0);
    line(300,200,300,500);
    stroke(0,0,255);
    line(300,300,300+(spring1.x2*2),300);
    line(300,400,300+(spring1.x2*2),400);
    stroke(255,0,0);
    line(300,200,300+(spring1.x2*2),300);
    line(300+(spring1.x2*2),300,300+(spring1.x2*2),400);
    line(300+(spring1.x2*2),400,300,500);

    }
    else if(spring1.x1==(-spring1.x2)){

        textFont("Nunito', sans-serif");
        textSize(17);
        strokeWeight(0); 
        text("MODE SHAPE", 250, 20);
        // textSize(13);
        text("When the initial excitation is given same to both masses in different direction, it",30,150)
        text("gives only the second mode shape of the system",150,170);
        strokeWeight(6.5);
        stroke(0);
        line(300,78,300,378);
        stroke(0,0,255);
        line(300,260,300+(spring1.x2*2),260);
        line(300,380,300+(spring1.x2*2),380);
        stroke(255,0,0);
        line(300,78,300+(spring1.x2*2),260);
        line(300+(spring1.x2*2),260,300+(spring1.x2*2),380);
        line(300+(spring1.x2*2),400,300,500);
    
    }
    else{
        
    textFont("'Nunito', sans-serif");
    textSize(17);
    strokeWeight(0);  
    text("MODE SHAPES", 255, 50);
    // textSize(13);
      strokeWeight(1); 
    stroke(0,0,0);  
    line(150, 200, 530, 200)
   
    line(150, 300, 530, 300)
    // line(300,650,300,750)
    textSize(16);
    fill(0);
    text("X\u2081", 130, 200);
    text("X\u2082", 130, 300);

    
    let add = 200;
    strokeWeight(3);
    stroke(0);
    line(120 + add, 100, 120 + add, 400); // y-coordinates reduced by 100
    stroke(0, 0, 255);
    line(120 + add, 200, 120 + (spring1.x1 * 5) + add, 200); // y-coordinates reduced by 100
    line(120 + add, 300, 120 + (spring1.x2 * 5) + add, 300); // y-coordinates reduced by 100
    stroke(255, 0, 0);
    line(120 + add, 100, 120 + (spring1.x1 * 5) + add, 200); // y-coordinates reduced by 100
    line(120 + add + (spring1.x1 * 5), 200, 120 + (spring1.x2 * 5) + add, 300); // y-coordinates reduced by 100
    line(120 + add + (spring1.x2 * 5), 300, 120 + add, 400); // y-coordinates reduced by 100

   
    }



  strokeWeight(1);
    spring1.initialise(F0, k3,k1,m1,k2,m2, x10, x20);
    spring1.update(t,factor)

  stroke(0);
  fill(0);
  document.getElementById("wd").textContent=spring1.w2.toFixed(4) + " rad/s";
document.getElementById("wn").textContent=spring1.w1.toFixed(4) + " rad/s";
document.getElementById("ww1").textContent=(spring1.w / spring1.w1).toFixed(4) + " rad/s";
document.getElementById("wn1").textContent=(spring1.w / spring1.w2).toFixed(4)
document.getElementById("x1").textContent= abs(spring1.x2).toFixed(4);
document.getElementById("x2").textContent= abs(spring1.x1).toFixed(4);
document.getElementById("xst").textContent= (spring1.F0 / spring1.k1).toFixed(4),
document.getElementById("x1st").textContent= abs(spring1.x2 / (spring1.F0 / spring1.k1)).toFixed(4),
document.getElementById("x2st").textContent= abs(spring1.x1 / (spring1.F0 / spring1.k1)).toFixed(4),

k1 = $("#fSpinner").spinner("value");
m1 = $("#omegaSpinner").spinner("value");
k2 = $("#k1Spinner").spinner("value");
m2 = $("#m1Spinner").spinner("value");
k3 = $("#k2Spinner").spinner("value");
F0 = $("#m2Spinner").spinner("value");
x10 = $("#x10Spinner").spinner("value");
x20 = $("#x20Spinner").spinner("value");

  push();
 

  magFac1.initialise();
  // magFac1.draw();
 
  t = t + dt;
  
  function adjustCommentsWidth() {
    if ($(window).width() < 944) {
   
      $('#variables').css('width', '100%');
      document.getElementById('Results').style.display = "none";
  // $('#refreshbutton').attr('disabled', true);
      // document.getElementById('playpausebutton').style.display = "none";
      // document.getElementById('playPause').style.display = "none";

    } else {
  
      $('#variables').css('width', '200%');
      document.getElementById('Results').style.display = "none";
      // $('#refreshbutton').css({
      //   "opacity":0.5,
      //     "pointer-events":"none"
      //     });
      // document.getElementById('playpausebutton').style.display = "none";
      // document.getElementById('playPause').style.display = "none";
 
    }
  }


  adjustCommentsWidth();
  
 
  $(window).resize(adjustCommentsWidth);
 
}
