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


    stroke('red');
    line(230 , 545 , 260 , 545);
    stroke('black')
    textSize(12);
    text('frequency line with respet to  different amplitude' , 270 , 550);
    


    strokeWeight(1);
    spring1.initialise(F0.inp,k3.inp,k1.inp,m1.inp,k2.inp,m2.inp);
    spring1.update(t, factor);
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
