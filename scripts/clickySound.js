/* bouncySound.js */
const links = document.querySelectorAll(".nav-link");
const sound = document.getElementById("the-best-sound");

console.log(links);
console.log(sound);

links.forEach(link => {
    link.addEventListener('click', () => {
        sound.currentTime = 0;
        sound.play();
    });
});