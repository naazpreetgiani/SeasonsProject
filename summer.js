// Make It Flower

// Canvas Setup
let cnv = document.getElementById("summerCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let upPressed = false;
let downPressed = false;

// IMG STUFF
let FlowerImg = document.getElementById("flower");
let GrassImg = document.getElementById("grass");

let flowers = [];
for (let n = 1; n <=10; n++) {
    flowers.push(randomflower());
}

window.addEventListener("load", draw)

function draw() {
    ctx.fillStyle = "rgb(148, 210, 238)";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    ctx.drawImage(GrassImg, 0, 550);

    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(400, 1000, 575, 0, 2 * Math.PI);
    ctx.fill();

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
    aFlower.y -= aFlower.ys;
    if (aFlower.y = yp) {
        aFlower.y += aFlower.ys; 
    } else if (aFlower.y < yp) {
        aFlower.y -+ aFlower.ys;
    }
    

    if (aFlower.x > 800) {
        aFlower.x = 0;
        aFlower.y = randomInt(400, cnv.height);
    }
}

function randomflower() {
   return {
        x: randomInt(0, cnv.width),
        y: randomInt(400, cnv.height),
        w: randomInt(20, 30),
        xs: randomInt(2, 5),
        ys: randomInt(2, 7),
        yp: y + randomInt(2, 4)
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
}

function keyupHandler(e) {
    //Check for keys pressed
    if (e.code === "ArrowUp") {
        upPressed = false;
    } else if (e.code === "ArrowDown") {
        downPressed = false;
    }
}