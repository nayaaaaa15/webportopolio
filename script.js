// Efek mengetik pada bagian profesi
const text = "Mahasiswa | Web Developer | UI/UX Designer";
let index = 0;
const typingText = document.querySelector(".hero p");

typingText.innerHTML = "";

function mengetik() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(mengetik, 100);
    }
}

mengetik();


// Animasi muncul saat halaman di-scroll
const cards = document.querySelectorAll(".card, .skill-card, .project-card");
function tampilScroll() {
    cards.forEach(card => {
        let posisi = card.getBoundingClientRect().top;
        let tinggiLayar = window.innerHeight;

        if (posisi < tinggiLayar - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
}

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s";
});

window.addEventListener("scroll", tampilScroll);
tampilScroll();


// Pesan ketika klik ikon kontak
const kontak = document.querySelectorAll(".social a");

kontak.forEach(icon => {
    icon.addEventListener("click", function() {
        alert("Anda akan diarahkan ke akun sosial saya.");
    });
});