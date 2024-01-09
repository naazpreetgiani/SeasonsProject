// Make It Snow

// Canvas Setup
let cnv = document.getElementById("springCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let upPressed = false;
let downPressed = false;

// IMG STUFF
let cloudImg = document.getElementById("cloud");

// Draw Clouds
ctx.drawImage(cloudImg, cloud1x, cloud1y); // Cloud 1
ctx.drawImage(cloudImg, cloud2x, cloud2y); // Cloud 2

let snowflakes = [];
for (let n = 1; n <=10; n++) {
    snowflakes.push(randomSnowflake());
}

window.addEventListener("load", draw)

function draw() {
    ctx.fillStyle = "rgb(148, 210, 238)";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

   for (let i = 0; i < snowflakes.length; i++) {
       moveFlake(snowflakes[i]);
       drawFlake(snowflakes[i]);
    }
  
 requestAnimationFrame(draw);
}

function drawFlake(aFlake) {

}

function moveFlake(aFlake) {
    aFlake.y += aFlake.s;

    if (aFlake.y > 600) {
        aFlake.y = 0;
        aFlake.x = randomInt(1, 800);
    }
}

function randomSnowflake() {
   return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(1, 3),
        s: randomInt(1, 4)
    }
}

function 

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
        snowflakes.push(randomSnowflake());
        console.log(snowflakes);
    } else if (downPressed) {
        snowflakes.pop();
        console.log(snowflakes);
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