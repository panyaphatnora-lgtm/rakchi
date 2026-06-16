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