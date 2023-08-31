function runPage3() {
    background(255);
    image(bg, 0, 0);
    
    stroke(0);
    fill(0);

    push();
    strokeWeight(1);
    textSize(25);
    textFont("Comic Sans MS ");
    text('Forging Hammer as 2DOF System ',200, 30);
    text(' - Impulse Excitation',280, 60);

    textSize(16);
    text("CONTROLS", 655, 417);
    text("VARIABLES", 655, 107);
    pop();

    textSize(20);
    text('Frequency Response Curves',50, 120);
    
    magFac1.initialise();
    magFac1.draw();
   // magFac3.initialise();
   // magFac3.draw();
    magFac2.initialise();
    magFac2.draw();


    // stroke('red')
    // textSize(10);
    // line(420 , 170 , 450  , 170 );
    
    // stroke('black')
    // text('Frequency response curve ' , 380 , 180)
    // text(' with respect to  amplitude of' , 380 , 190)
    // text(' X1 and w1' , 380, 200)
    stroke('purple');
    strokeWeight(3);
    line(355 , 140 , 375 , 140);
    stroke('black');
    strokeWeight(1);     
    textSize(14);
    text('Frequency Response of Mass 1' , 380 , 145);
 
    // stroke('purple')
    // textSize(10);
    // line(420 , 220 , 450  , 220 );
    
    // stroke('black')
    // text('Frequency response curve ' , 380 , 230)
    // text(' with respect to  amplitude of ' , 380 , 240)
    // text('X2 and w2' , 380 , 250)

    
    stroke('red');
    strokeWeight(3);
    line(355 , 160 , 375 , 160);
    stroke('black');
    strokeWeight(1);
    textSize(14);
    text('Frequency Response of Mass 2' , 380 , 165);


    strokeWeight(1);
    spring1.initialise(F0.inp,k3.inp,k1.inp,m1.inp,k2.inp,m2.inp);
    spring1.update(t, factor);
  
    let add = 320;
    let dy = 90;
    stroke('red')
    strokeWeight(5)
    point(50+add , 100+dy)
    strokeWeight(1)
    text('w2' , 55+add ,100 +dy)
    stroke('purple')
    strokeWeight(5)
    point(50+add , 120+dy);
    strokeWeight(1)
    text('w1' , 55 +add, 120+dy)

    stroke('purple');
    strokeWeight(10);
    point(70 + spring1.w1*50, 500);

    stroke('red');
    strokeWeight(10);
    point( 120+ spring1.w2*500, 500);
    strokeWeight(1)

    button5.draw()
  //  k3.draw();
   // x2.draw();
   F0.draw();
    k1.draw();
    m1.draw();
    k2.draw();
    m2.draw();
    t = t+dt;
    //clear.mousePressed(clearMe);
}
