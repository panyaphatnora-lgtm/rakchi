/* =====================================
   ELEMENTS
===================================== */

const chatPage =
document.getElementById("chatPage");

const loadingPage =
document.getElementById("loadingPage");

const universePage =
document.getElementById("universePage");

const albumPage =
document.getElementById("albumPage");

const finalPage =
document.getElementById("finalPage");

const openUniverseBtn =
document.getElementById("openUniverseBtn");

const heartPortal =
document.getElementById("heartPortal");

const musicBtn =
document.getElementById("musicBtn");

const bgMusic =
document.getElementById("bgMusic");

const floatingMessages =
document.getElementById("floatingMessages");

const albumImage =
document.getElementById("albumImage");

const albumText =
document.getElementById("albumText");

const prevBtn =
document.getElementById("prevBtn");

const nextBtn =
document.getElementById("nextBtn");

const restartBtn =
document.getElementById("restartBtn");

/* =====================================
   HEART BACKGROUND
===================================== */

const heartBg =
document.querySelector(".heart-bg");

for(let i=0;i<45;i++){

    const heart =
    document.createElement("div");

    heart.className =
    "heart";

    heart.innerHTML =
    "❤️";

    heart.style.left =
    Math.random()*100 + "%";

    heart.style.fontSize =
    12 + Math.random()*30 + "px";

    heart.style.animationDuration =
    8 + Math.random()*10 + "s";

    heart.style.animationDelay =
    Math.random()*5 + "s";

    heartBg.appendChild(heart);
}

/* =====================================
   OPEN UNIVERSE
===================================== */

openUniverseBtn.addEventListener(
"click",
()=>{

    chatPage.style.display =
    "none";

    loadingPage.style.display =
    "flex";

    setTimeout(()=>{

        loadingPage.style.display =
        "none";

        universePage.style.display =
        "flex";

        createFloatingMessages();

    },2500);
});

/* =====================================
   MUSIC
===================================== */

let playing = false;

musicBtn.addEventListener(
"click",
async()=>{

    if(!playing){

        try{

            await bgMusic.play();

            playing = true;

            musicBtn.innerText =
            "🎵 ปิดเพลง";

        }catch(err){

            console.log(err);
        }

    }else{

        bgMusic.pause();

        playing = false;

        musicBtn.innerText =
        "🎵 เปิดเพลง";
    }
});

/* =====================================
   FLOATING MESSAGES
===================================== */

const messages = [

"สุขสันต์วันเกิดนะ ชิ ❤️",
"รักเธอที่สุดในจักรวาล",
"เธอคือดวงดาวของฉัน",
"ขอบคุณที่เข้ามาในชีวิต",
"คิดถึงเธอเสมอ",
"ขอให้มีความสุขทุกวัน",
"ยิ้มเยอะ ๆ นะคนเก่ง",
"เธอคือของขวัญที่ดีที่สุด",
"อยู่ด้วยกันไปนาน ๆ",
"รักชิที่สุดเลย ❤️"
];

function createFloatingMessages(){

    setInterval(()=>{

        const msg =
        document.createElement("div");

        msg.className =
        "float-message";

        msg.innerText =
        messages[
            Math.floor(
            Math.random()*
            messages.length
            )
        ];

        msg.style.left =
        Math.random()*85 + "%";

        msg.style.top =
        Math.random()*85 + "%";

        floatingMessages.appendChild(
        msg
        );

        setTimeout(()=>{
            msg.remove();
        },12000);

    },1200);
}

/* =====================================
   ALBUM
===================================== */

const albumMessages = [

"ขอบคุณที่เข้ามาเป็นความสุขของฉัน ❤️",

"ขอให้วันนี้เต็มไปด้วยรอยยิ้ม",

"สุขสันต์วันเกิดนะคนเก่ง",

"เธอคือดวงดาวที่สว่างที่สุด",

"รักเธอมากกว่าที่คำพูดจะอธิบายได้",

"ขอให้ทุกความฝันเป็นจริง",

"ขอให้มีแต่เรื่องดี ๆ",

"อยู่ด้วยกันไปนาน ๆ นะ",

"ขอบคุณที่เป็นคนพิเศษ",

"รักเธอที่สุดในจักรวาล ❤️"
];

let currentImage = 1;

function updateAlbum(){

    albumImage.src =
    `./img/${currentImage}.jpg`;

    albumText.innerText =
    albumMessages[
    currentImage-1
    ];
}

heartPortal.addEventListener(
"click",
()=>{

    albumPage.style.display =
    "flex";

    updateAlbum();
});

prevBtn.addEventListener(
"click",
()=>{

    if(currentImage > 1){

        currentImage--;

        updateAlbum();
    }
});

nextBtn.addEventListener(
"click",
()=>{

    if(currentImage < 10){

        currentImage++;

        updateAlbum();

    }else{

        albumPage.style.display =
        "none";

        finalPage.style.display =
        "flex";
    }
});

/* =====================================
   RESTART
===================================== */

restartBtn.addEventListener(
"click",
()=>{

    currentImage = 1;

    finalPage.style.display =
    "none";

    universePage.style.display =
    "flex";
});

/* =====================================
   CANVAS UNIVERSE
===================================== */

const canvas =
document.getElementById(
"universeCanvas"
);

const ctx =
canvas.getContext("2d");

function resizeCanvas(){

    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;
}

resizeCanvas();

window.addEventListener(
"resize",
resizeCanvas
);

/* =====================================
   STARS
===================================== */

const stars = [];

for(let i=0;i<700;i++){

    stars.push({

        x:
        Math.random()*
        window.innerWidth,

        y:
        Math.random()*
        window.innerHeight,

        size:
        Math.random()*2.5,

        alpha:
        Math.random()
    });
}

/* =====================================
   SPARKLES
===================================== */

for(let i=0;i<120;i++){

    const sparkle =
    document.createElement("div");

    sparkle.className =
    "sparkle";

    sparkle.style.left =
    Math.random()*100 + "%";

    sparkle.style.top =
    Math.random()*100 + "%";

    sparkle.style.animationDelay =
    Math.random()*2 + "s";

    document.body.appendChild(
    sparkle
    );
}

/* =====================================
   SHOOTING STARS
===================================== */

function createShootingStar(){

    const star =
    document.createElement("div");

    star.className =
    "shooting-star";

    star.style.left =
    Math.random()*100 + "%";

    star.style.top =
    Math.random()*40 + "%";

    document.body.appendChild(
    star
    );

    setTimeout(()=>{

        star.remove();

    },2000);
}

setInterval(
createShootingStar,
4500
);

/* =====================================
   GALAXY
===================================== */

let rotation = 0;

function drawUniverse(){

    ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
    );

    const cx =
    canvas.width / 2;

    const cy =
    canvas.height / 2;

    /* STAR FIELD */

    stars.forEach(star=>{

        ctx.beginPath();

        ctx.fillStyle =
        `rgba(
            255,
            180,
            240,
            ${star.alpha}
        )`;

        ctx.arc(
        star.x,
        star.y,
        star.size,
        0,
        Math.PI*2
        );

        ctx.fill();
    });

    /* BLACK HOLE */

    const holeGradient =
    ctx.createRadialGradient(
    cx,
    cy,
    0,
    cx,
    cy,
    160
    );

    holeGradient.addColorStop(
    0,
    "#000"
    );

    holeGradient.addColorStop(
    0.5,
    "rgba(70,0,100,.5)"
    );

    holeGradient.addColorStop(
    1,
    "rgba(255,0,180,.1)"
    );

    ctx.beginPath();

    ctx.fillStyle =
    holeGradient;

    ctx.arc(
    cx,
    cy,
    120,
    0,
    Math.PI*2
    );

    ctx.fill();

    /* GALAXY RINGS */

    ctx.save();

    ctx.translate(
    cx,
    cy
    );

    rotation += 0.002;

    ctx.rotate(rotation);

    for(let i=0;i<8;i++){

        ctx.beginPath();

        ctx.strokeStyle =
        `hsla(
        ${290+i*10},
        100%,
        70%,
        .4
        )`;

        ctx.lineWidth = 4;

        ctx.ellipse(

        0,
        0,

        150 + i*40,

        50 + i*18,

        i*0.3,

        0,
        Math.PI*2
        );

        ctx.stroke();
    }

    ctx.restore();

    /* ORBIT PARTICLES */

    for(let i=0;i<350;i++){

        const angle =

        rotation*4 +

        i*0.12;

        const radius =

        130 +

        (i%80)*5;

        const x =

        cx +

        Math.cos(angle)
        * radius;

        const y =

        cy +

        Math.sin(angle)
        * radius
        * .45;

        ctx.beginPath();

        ctx.fillStyle =
        "rgba(255,120,220,.9)";

        ctx.arc(
        x,
        y,
        2,
        0,
        Math.PI*2
        );

        ctx.fill();
    }

    /* HEART PARTICLES */

    ctx.save();

    ctx.translate(
    cx,
    cy - 180
    );

    for(let t=0;t<360;t+=4){

        const rad =
        t*Math.PI/180;

        const x =
        16*Math.pow(
        Math.sin(rad),
        3
        );

        const y =
        -(
        13*Math.cos(rad)
        -
        5*Math.cos(2*rad)
        -
        2*Math.cos(3*rad)
        -
        Math.cos(4*rad)
        );

        ctx.beginPath();

        ctx.fillStyle =
        "rgba(255,80,200,.9)";

        ctx.arc(
        x*6,
        y*6,
        2.5,
        0,
        Math.PI*2
        );

        ctx.fill();
    }

    ctx.restore();

    requestAnimationFrame(
    drawUniverse
    );
}

drawUniverse();

/* =====================================
   AUTO MUSIC TRY
===================================== */

document.addEventListener(
"click",
()=>{

    if(!playing){

        bgMusic.play()
        .then(()=>{

            playing = true;

            musicBtn.innerText =
            "🎵 ปิดเพลง";

        })
        .catch(()=>{});
    }

},{once:true});
