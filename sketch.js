let song;
let sliderRate;
//let sliderColor;
let bubbles = [];
let flowers = [] ;
let flowerst = [];
let amp;
let volhistory = [];
let couple;
let graphh;
let split;
let input;
let greeting;
let purple;

function preload(){
  
  for (let i = 0; i < 10; i++) {
    flowers[i] = loadImage("flower.png");
  }
  for (let i = 0; i < 10; i++) {
    flowerst[i] = loadImage("flowertwo.png");
  }
}
function setup() {
  createCanvas(1200, 800);
  angleMode(DEGREES);
  song = loadSound('bigbang.mp3', loaded);
  road = loadImage("empty-road.jpg", loaded);
  couple = loadImage("message.png", loaded);
  split = loadImage("split.png", loaded);
  purple = loadImage("purple.png");
  let col = color("#78DFD0 ");
  button = createButton("play");
  button.style('background-color', col);
  button.mousePressed(togglePlaying);
  song.setVolume(0.5);
  //sliderRate = createSlider(0, 1.5, 1, 0.01);
  amp = new p5.Amplitude();
  textSize(24);
  graphh = color("white");
 // textFont(inconsolata);
 
}
function greet() {
  if (92 < song.currentTime() && song.currentTime() < 111){
  const name = input.value();
  greeting.html( name);
  input.value('');

}}

function mousePressed(){
  let flower = random(flowers);

    let x = mouseX
    let y = mouseY
    let r = random(70, 150);

    let b = new Bubble(x, y, r, flower);
    bubbles.push(b);
  
}
function loaded() {
 console.log("loaded");
}
function togglePlaying(){
  if (!song.isPlaying()){
    song.play();
    button.html("pause");
   
  }
  else {
    song.pause();
    button.html("play");
  }
}



function draw() {
  background(song.currentTime()*2, 0, song.currentTime()*5);
  if(song.currentTime() < 19){
    fill("white")
    text("Yeah oh oh ", 570, 720, 300, 50)
  }
  if (song.currentTime() > 19 && song.currentTime() < 21){
    fill("white")
    text("Bigbang", 580, 720, 300, 50)
  }
  if (song.currentTime() > 21 && song.currentTime() < 26){
    fill("white")
    s = "It would've been great back then"
    s2 = "If only I was with you"
    text(s, 510, 700, 300, 50)
    text(s2, 510,750, 300, 50)
  }
  if (song.currentTime() > 26 && song.currentTime() < 31){
    fill("white")
    b = "Although it was lonely and sad at times"
    b2 = "If only I went through it  with you"
    text(b, 460, 700, 500, 50)
    text(b2, 460,750, 500, 50)
  }
  if (song.currentTime() > 31 && song.currentTime() < 36){
    fill("white")
    b = "Sing it na na na"
    text(b, 500, 700, 500, 50)
    text(b, 500, 750, 500, 50)
  }
  if (song.currentTime() > 36 && song.currentTime() < 41){
    fill("white")
    b = "This isn't the last time for us"
    b2 = "Let's meet again when flowers bloom"
    text(b, 480, 700, 500, 50)
    text(b2, 480,750, 500, 50)
  }
 
  
  if (song.currentTime() < 41) {
    let vol = amp.getLevel();
    volhistory.push(vol);
    graphh.setAlpha(60);
    stroke(graphh);
    strokeWeight(4);
    fill(graphh);
    translate(width/2, height/2);
    beginShape();
    for (let i = 0; i < 360; i++) {
      let r = map(volhistory[i], 0, 1, 230, 40);
      let x = r* cos(i);
      let y = r* sin(i);
      vertex(x, y);
    }
    endShape();
   
    if (volhistory.length > 360) {
      volhistory.splice(0, 1);
    }
  }
  
  
  if ( 71 < song.currentTime() && song.currentTime() < 92) {

    let vol = amp.getLevel();
    volhistory.push(vol);
    graphh.setAlpha(60);
    stroke(graphh);
    strokeWeight(4);
    fill(graphh);
    translate(width/2, height/2);
    beginShape();
    for (let i = 0; i < 360; i++) {
      let r = map(volhistory[i], 0, 1, 230, 40);
      let x = r* cos(i);
      let y = r* sin(i);
      vertex(x, y);
    }
    endShape();
   
    if (volhistory.length > 360) {
      volhistory.splice(0, 1);
    }
   
    
  }
  if (92 < song.currentTime() && song.currentTime() < 111){
    //background(purple);
  
    let lyrics = "If you miss me come back to me then you can love me again go on this flower road and take a rest then will you wait for me at that place?"
    fill('white')
    text (lyrics, 720, 300, 520, 500)
    image(couple, 300, 400, 500, 450)
    


  input = createInput();
  input.position(80, 450);

  button = createButton('enter');
  button.position(input.x + input.width, 300);
  button.mousePressed(greet);

  greeting = createElement();
  greeting.position(80, 400);

flower.remove();
 }

 if (song.currentTime() > 111 && song.currentTime() < 132) {

   let vol = amp.getLevel();
   volhistory.push(vol);
   graphh.setAlpha(80);
   stroke(graphh);
   strokeWeight(4);
   fill(graphh);
   translate(width/2, height/2);
   beginShape();
   for (let i = 0; i < 360; i++) {
     let r = map(volhistory[i], 0, 1, 230, 40);
     let x = r* cos(i);
     let y = r* sin(i);
     vertex(x, y);
   }
   endShape();
  
   if (volhistory.length > 360) {
     volhistory.splice(0, 1);
   }
   input.remove();
   greeting.remove();
   button.remove();
   flower.remove();

 }
 

  
   if (132 < song.currentTime() && song.currentTime() < 162){
   
     fill("black")
     textSize(18)
     res1 = "Path A"
     res2 = " Path B"
     text(res1, 150, 350, 450, 300);
     text(res2, 900, 350, 500, 300);
     background(split);
     input.remove();
     greeting.remove();
     //button.remove();
     flower.remove();
     
    }
    if (song.currentTime() > 162 && song.currentTime() < 202) {
 
      let vol = amp.getLevel();
      volhistory.push(vol);
      graphh.setAlpha(60);
      stroke(graphh);
      strokeWeight(4);
      fill(graphh);
      translate(width/2, height/2);
      beginShape();
      for (let i = 0; i < 360; i++) {
        let r = map(volhistory[i], 0, 1, 230, 40);
        let x = r* cos(i);
        let y = r* sin(i);
        vertex(x, y);
      }
      endShape();
     
      if (volhistory.length > 360) {
        volhistory.splice(0, 1);
      }
      input.remove();
      greeting.remove();
     // button.remove();
      flower.remove();
      //bubbles.remove();
    }
    if (song.currentTime() > 41 && song.currentTime() < 71){
      background(road);
      fill("white")
      text("click to make a flower road", 520, 750, 700, 50)
    }
    if (song.currentTime() > 202){
    
      let vol = amp.getLevel();
      volhistory.push(vol);
      graphh.setAlpha(60);
      stroke(graphh);
      strokeWeight(4);
      fill(graphh);
      translate(width/2, height/2);
      beginShape();
      for (let i = 0; i < 360; i++) {
        let r = map(volhistory[i], 0, 1, 270, 40);
        let x = r* cos(i);
        let y = r* sin(i);
        vertex(x, y);
      }
      endShape();
     
      if (volhistory.length > 360) {
        volhistory.splice(0, 1);
      }
      input.remove();
      greeting.remove();
     // button.remove();
      flower.remove();
    }
    

  
  //song.rate(sliderRate.value());
  for (let i = 0; i < bubbles.length; i++) {
   
    bubbles[i].move();
    bubbles[i].show();
    
  }
 
  stroke("#804000")
  line(1280, 400, 1200, 650)
}

class Bubble {
  constructor(x, y, r, img) {
  
    this.x = x
    this.y = y
    this.r = r
    this.flower = img
    
  }

  move() {
    this.y = this.y - random(-0.5, 0.5);
    this.x = this.x - random(-1, 1);
  }

  show() {
  
     image(this.flower, this.x, this.y, this.r, this.r);
    
  }

}
