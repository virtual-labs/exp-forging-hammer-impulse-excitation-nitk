function handleEvents() {

    // console.log(mouseX, mouseY)
    
    if (button1.in(mouseX, mouseY) && page1) {
        runPage1();
        if (animation) {
            noLoop()
            button1.icon = play;
            button1.draw()
            animation = false;
            touch = true;
        }
        else {
            loop()
            button1.icon = pause;
            button1.draw()
            animation = true;
            touch = false;
        }
    }
    if (button2.in(mouseX, mouseY) && page1) {
        runPage2();
        position_graph1.delete();
        position_graph2.delete();
        page1 = false;
        page2 = true;

        //magFac1.initialise();
        

      
    }
    if (button3.in(mouseX, mouseY) && page2) {
        runPage1();
        position_graph1.delete();
        position_graph2.delete();
        page1 = true;
        page2 = false;

        
    }

    if (button4.in(mouseX, mouseY) && page2){
        runPage3();
        position_graph1.delete();
        position_graph2.delete();
        page3 = true;
        page2 = false;

        //magFac2.initialise();
    }

    if (button5.in(mouseX,mouseY)&& page3){
        runPage2();
        position_graph1.delete();
        position_graph2.delete();
        page2= true;
        page3 = false;
        //magFac1.initialise();
    }

    
    if (button6.in(mouseX,mouseY)&& page1){
        setup();
        page2= false;
        page3 = false;
        //magFac1.initialise();
    }
    
}
