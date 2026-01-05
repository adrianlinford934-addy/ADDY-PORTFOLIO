const text = ["UI/UX Designer", "Web Designer"];
let index = 0;
let charIndex = 0;
const typingSpan = document.querySelector(".typing");

function typeEffect() {
    if (charIndex < text[index].length) {
        typingSpan.textContent += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 150);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingSpan.textContent = text[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 100);
    } else {
        index = (index + 1) % text.length;
        setTimeout(typeEffect, 500);
    }
}

typeEffect();