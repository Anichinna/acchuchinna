// ================= MOBILE MENU =================
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// ================= FLOATING HEARTS =================
const heartContainer = document.querySelector(".floating-hearts");

if (heartContainer) {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 15 + "px";
        heartContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 6000);
    }, 500);
}

// ================= TYPEWRITER =================
const text = `
My dearest love ❤️,

From the moment you entered my life,
everything changed in the most beautiful way.

Your smile became my sunrise,
your voice became my favorite melody,
and your love became my greatest blessing.

Every heartbeat of mine whispers your name.
Every dream I see has you standing beside me.
You are not just my wife,
you are my best friend,
my strength,
my peace,
and my forever.

When I hold your hand,
I feel the entire universe standing still.
When you look into my eyes,
I see my whole future shining bright.

If love had a face,
it would look like you.
If happiness had a name,
it would be yours.

Through every storm,
through every challenge,
through every season of life —
I promise to stand beside you,
protect you,
support you,
and love you more with each passing day.

Even if I had a thousand lifetimes,
I would still choose you
again and again and again.

You are my today,
my tomorrow,
and my always.

Forever yours,
With all my heart ❤️
`;

let i = 0;

function typeWriter() {
    const element = document.getElementById("typewriter");
    if (element && i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
    }
}

if (document.getElementById("typewriter")) {
    typeWriter();
}

// ================= MEMORY SLIDER =================
let current = 0;
const cards = document.querySelectorAll(".memory-card");

function updateSlider() {
    if (!cards.length) return;

    cards.forEach((card, index) => {
        card.classList.remove("active", "left", "right");

        if (index === current) {
            card.classList.add("active");
        } else if (index === (current - 1 + cards.length) % cards.length) {
            card.classList.add("left");
        } else if (index === (current + 1) % cards.length) {
            card.classList.add("right");
        }
    });
}

function nextSlide() {
    current = (current + 1) % cards.length;
    updateSlider();
}

function prevSlide() {
    current = (current - 1 + cards.length) % cards.length;
    updateSlider();
}

if (cards.length > 0) {
    updateSlider();
}

// ================= PROPOSAL =================
function showHearts() {
    const message = document.createElement("h2");
    message.innerText = "I Love You Forever ❤️";
    message.style.marginTop = "20px";
    document.querySelector(".proposal").appendChild(message);
}

document.addEventListener("click", function() {
    const audio = document.getElementById("bgMusic");
    if (audio) {
        audio.play();
    }
});

const music = document.getElementById("bgMusic");
if (music) {
    music.volume = 0.3; // Soft background sound
}



function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 5 + 5 + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 300);
