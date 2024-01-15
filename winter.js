// Make It Snow

// Canvas Setup
let cnv = document.getElementById("winterCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let upPressed = false;
let downPressed = false;
let bright = false;
let dark = false;
let left = false;
let right = false;

let olafImg = document.getElementById("winterolaf");
let flakeImg = document.getElementById("snowflake");
let iceImg = document.getElementById("ice");

let snowflakes = [];
for (let n = 1; n <=10; n++) {
    snowflakes.push(randomSnowflake());
}

let background = {
    r: 0,
    g: 0,
    b: 0
}

let block1 = {
    x: 0,
    y: 175,
    w: 150,
    h: 500
}

let block2 = {
    x: 80,
    y: 250,
    w: 150,
    h: 400
}
let block3 = {
    x: 160,
    y: 350,
    w: 150,
    h: 300
}
let block4 = {
    x: 240,
    y: 425,
    w: 150,
    h: 200
}
let block5 = {
    x: 320,
    y: 475,
    w: 150,
    h: 120
}

let movement = {
    x: 320,
    y: 160
}

window.addEventListener("load", draw)

function draw() {
    ctx.fillStyle = `rgb(${background.r}, ${background.g}, ${background.b})`;
    ctx.fillRect(0, 0, cnv.width, cnv.height);

//    ctx.fillStyle = "white";
//     ctx.beginPath();
//     ctx.arc(400, 1000, 575, 0, 2 * Math.PI);
//     ctx.fill(); 

    ctx.fillStyle = "white";
    ctx.fillRect(0, 500, cnv.width, cnv.height)

    ctx.drawImage(iceImg, block1.x, block1.y, block1.w, block1.h);
    ctx.drawImage(iceImg, block2.x, block2.y, block2.w, block2.h);
    ctx.drawImage(iceImg, block3.x, block3.y, block3.w, block3.h);
    ctx.drawImage(iceImg, block4.x, block4.y, block4.w, block4.h);
    ctx.drawImage(iceImg, block5.x, block5.y, block5.w, block5.h);

    ctx.drawImage(olafImg, movement.x, movement.y, 236, 459);
 
    if (left) {
        movement.x -= 80;
        movement.y -= 50;
    } else if (right) {
        movement.x += 80;
    }

    // Check for Steps
    if (movement.x === block5.x - 80) {
        // movement.x === block5.x - 80;
        // movement.y === block5.y - 365;
        // let q1 = prompt("Who created Olaf?")
        if (q1 === "Elsa") {
            alert("Correct!");
            movement.x === block5.x - 80;
            movement.y === block5.y - 365;
        } else {
            alert("Incorrect.")
            movement.x = 320;
            movement.y = 160;
        }
    }

    // Check for end on stairs
    if (movement.x <= -80) {
        movement.x = -80;
        movement.y = -90;
    }

   
   for (let i = 0; i < snowflakes.length; i++) {
       moveFlake(snowflakes[i]);
       drawFlake(snowflakes[i]);
    }
  
 requestAnimationFrame(draw);
}

function drawFlake(aFlake) {
    ctx.drawImage(flakeImg, aFlake.x, aFlake.y, aFlake.w, aFlake.w); 
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
        w: randomInt(10, 20),
        s: randomInt(1, 4)
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
        snowflakes.push(randomSnowflake());
        console.log(snowflakes);
    } else if (downPressed) {
        snowflakes.pop();
        console.log(snowflakes);
    } 

    // Check for Movement
    if (e.code === "KeyA") {
        left = true;
    } else if (e.code === "KeyD") {
        right = true;
    }

    // Check for brightness
    if (e.code === "ArrowLeft") {
        bright = true;
    } else if (e.code === "ArrowRight") {
        dark = true;
    }

    if (bright) {
        background.b++;
    } else if (dark) {
        background.b--;
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

    if (e.code === "KeyA") {
        left = false;
    } else if (e.code === "KeyD") {
        right = false;
    }
}