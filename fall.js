// Make It Snow

// Canvas Setup
let cnv = document.getElementById("fallCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let upPressed = false;
let downPressed = false;
let bright = false;
let dark = false;

// Image Stuff
let leafImg = document.getElementById("leaf");
let leafpileImg = document.getElementById("leafpile");

let leaves = [];
for (let n = 1; n <=10; n++) {
    leaves.push(randomleaf());
}

let background = {
    r: 145,
    g: 200,
    b: 230
}

window.addEventListener("load", draw)

function draw() {
    ctx.fillStyle = `rgb(${background.r}, ${background.g}, ${background.b})`;
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.arc(400, 1000, 575, 0, 2 * Math.PI);
    ctx.fill(); 

    ctx.drawImage(leafpileImg, 500, 400, 200, 200); 

   for (let i = 0; i < leaves.length; i++) {
       moveLeaf(leaves[i]);
       drawLeaf(leaves[i]);
    }
  
 requestAnimationFrame(draw);
}

function drawLeaf(aLeaf) {
    ctx.drawImage(leafImg, aLeaf.x, aLeaf.y, aLeaf.w, aLeaf.w); 
}

function moveLeaf(aLeaf) {
    aLeaf.y += aLeaf.s;

    if (aLeaf.y > 600) {
        aLeaf.y = 0;
        aLeaf.x = randomInt(1, 800);
    }
}

function randomleaf() {
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
        leaves.push(randomleaf());
        console.log(leaves);
    } else if (downPressed) {
        leaves.pop();
        console.log(leaves);
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