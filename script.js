// Typewriter Effect
const typewriter = document.getElementById('typewriter');
const texts = ["Nurul Anis Elyana", "a Web Developer", "a Tech Enthusiast"];
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < texts[textIndex].length) {
        typewriter.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(deleteText, 2000);
    }
}

function deleteText() {
    if (charIndex > 0) {
        typewriter.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
    }
}

// Mulakan effect bila page loading
document.addEventListener('DOMContentLoaded', type);

