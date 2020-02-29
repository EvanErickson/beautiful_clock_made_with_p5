function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    background(0);
    translate(200, 200);
    rotate(-90);

    let hr = hour();
    let mn = minute();
    let sc = second();

    strokeWeight(8);
    stroke(255, 100, 150);
    noFill();
    //Second hand
    let sec = map(sc, 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, sec);

    //Minute hand
    stroke(150, 100, 255);
    let min = map(mn, 0, 60, 0, 360);
    arc(0, 0, 280, 280, 0, min);

    //Hour hand
    stroke(150, 255, 100);
    let hou = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 260, 260, 0, hou);



    // fill(255);
    // noStroke();
    // text(hr + ':' + mn + ':' + sc, 10, 200);
}
