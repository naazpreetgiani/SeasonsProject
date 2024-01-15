// Make It Flower

// Canvas Setup
let cnv = document.getElementById("summerCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let upPressed = false;
let downPressed = false;
let bright = false;
let dark = false;

// IMG STUFF
let FlowerImg = document.getElementById("flower");
let GrassImg = document.getElementById("grass");

let flowers = [];
for (let n = 1; n <=10; n++) {
    flowers.push(randomflower());
}

let background = {
    r: 148,
    g: 210,
    b: 238
}

window.addEventListener("load", draw)

function draw() {
    ctx.fillStyle = `rgb(${background.r}, ${background.g}, ${background.b})`;
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    ctx.drawImage(GrassImg, 0, 250, cnv.width, cnv.height);

   for (let i = 0; i < flowers.length; i++) {
       moveFlower(flowers[i]);
       drawFlower(flowers[i]);
    }
  
    requestAnimationFrame(draw);
}

function drawFlower(aFlower) {
    ctx.drawImage(FlowerImg, aFlower.x, aFlower.y, aFlower.w, aFlower.w); 
}

function moveFlower(aFlower) {
    aFlower.x += aFlower.xs;
    // aFlower.y -= aFlower.ys;
    // if (aFlower.y < aFlower.y - aFlower.yp) {
    //     aFlower.y -= aFlower.ys; 
    // } else if (aFlower.y > aFlower.y + aFlower.yp) {
    //     aFlower.y += aFlower.ys;
    // }
    

    if (aFlower.x > 800) {
        aFlower.x = 0;
        aFlower.y = randomInt(450, cnv.height);
    }
}

function randomflower() {
   return {
        x: randomInt(0, cnv.width),
        y: randomInt(450, cnv.height),
        w: randomInt(20, 30),
        xs: randomInt(2, 5),
        ys: randomInt(2, 4),
        yp: randomInt(2, 4)
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
        flowers.push(randomflower());
        console.log(flowers);
    } else if (downPressed) {
        flowers.pop();
        console.log(flowers);
    } 

    // Check for brightness
    if (e.code === "ArrowLeft") {
        bright = true;
    } else if (e.code === "ArrowRight") {
            dark = true;
    }
        
    if (bright) {
        background.r++;
        background.g++;
        background.b++;
    } else if (dark) {
        background.r--;
        background.g--;
        background.b--;
    }

    if (background.r >= 188 && background.g >= 250 && background.b >= 278) {
        background.r = 188;
        background.g = 250;
        background.b = 278;
    } else if (background.r <= 60 && background.g <= 122 && background.b <= 150) {
        background.r = 60;
        background.g = 122;
        background.b = 150;
    }
}

function keyupHandler(e) {
    //Check for keys pressed
    if (e.code === "ArrowUp") {
        upPressed = false;
    } else if (e.code === "ArrowDown") {
        downPressed = false;
    }

    if (e.code === "ArrowLeft") {
        bright = false;
    } else if (e.code === "ArrowRight") {
        dark = false;
    }
}