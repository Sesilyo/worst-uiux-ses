/* announcementSlider.js */

const slider = document.getElementById("announcement-slider");
const cards  = document.querySelectorAll(".announcement-card");

slider.addEventListener("input", () => {
    const visible = parseInt(slider.value);

    cards.forEach((card, index) => {
        if (index < visible) {
            card.style.display = "block";
        }

        else {
            card.style.display = "none";
        }
    })
})