// Make It Rain

// Canvas Setup
let cnv = document.getElementById("springCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let upPressed = false;
let downPressed = false;
let cloud1x = -75;
let cloud1y = -75;
let cloud2x = 0;
let cloud2y = -50;
let cloud3x = 150;
let cloud3y = -75;
let cloud4x = 225;
let cloud4y = -50;
let cloud5x = 400;
let cloud5y = -75;
let cloud6x = 550;
let cloud6y = -75;

// Image Stuff
let RaindropImg = document.getElementById("raindrop");
let cloudImg = document.getElementById("cloud");

let raindrops = [];
for (let n = 1; n <=10; n++) {
    raindrops.push(randomRaindrop());
}

window.addEventListener("load", draw)

function draw() {
    ctx.fillStyle = "rgb(43, 176, 248)";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(400, 1000, 580, 0, 2 * Math.PI);
    ctx.fill();

    ctx.drawImage(cloudImg, cloud1x, cloud1y);
    ctx.drawImage(cloudImg, cloud2x, cloud2y);
    ctx.drawImage(cloudImg, cloud3x, cloud3y);
    ctx.drawImage(cloudImg, cloud4x, cloud4y);
    ctx.drawImage(cloudImg, cloud5x, cloud5y);
    ctx.drawImage(cloudImg, cloud6x, cloud6y);

   for (let i = 0; i < raindrops.length; i++) {
       moveRaindrop(raindrops[i]);
       drawRaindrop(raindrops[i]);
    }
  
    requestAnimationFrame(draw);
}

function drawRaindrop(aRaindrop) {
    ctx.drawImage(RaindropImg, aRaindrop.x, aRaindrop.y, aRaindrop.w, aRaindrop.w); 
}

function moveRaindrop(aRaindrop) {
    aRaindrop.y += aRaindrop.s;

    if (aRaindrop.y > 600) {
        aRaindrop.y = 0;
        aRaindrop.x = randomInt(1, 800);
    }
}

function randomRaindrop() {
   return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        w: randomInt(20, 30),
        s: randomInt(2, 5)
    }
}

// Event Listeners & Handlers
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function keydownHandler(e) {
    //Check for keys pressed
    if (e.code === "ArrowUp") {
        upPressed = true;
    } else if (e.code === "ArrowDown") {
        downPressed = true;
    }

    if (upPressed) {
        raindrops.push(randomRaindrop());
        console.log(raindrops);
    } else if (downPressed) {
        raindrops.pop();
        console.log(raindrops);
    } 
}

function keyupHandler(e) {
    //Check for keys pressed
    if (e.code === "ArrowUp") {
        upPressed = false;
    } else if (e.code === "ArrowDown") {
        downPressed = false;
    }
}