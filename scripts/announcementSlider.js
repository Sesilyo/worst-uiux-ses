/* announcementSlider.js */

const slider = document.getElementById("announcement-slider");
const rows  = document.querySelectorAll(".announcement-card");

slider.addEventListener("input", () => {
    const visible = parseInt(slider.value);

    rows.forEach((row, index) => {
        row.style.display = index < visible ? "grid" : "none";
    });
});