/* bouncySound.js */
const links = document.querySelectorAll("a");
const sound = document.getElementById("the-best-sound");

console.log("clickySound links okay." + links);
console.log("clickySound sound okay." + sound);

links.forEach(link => {
    link.addEventListener('click', () => {
        sound.currentTime = 0;
        sound.play();
    });
});