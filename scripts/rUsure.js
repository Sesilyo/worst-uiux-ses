fetch('./pagesNmore/areYouSure.html')
    .then(res => res.text())
    .then(html => {
        document.body.insertAdjacentHTML('beforeend', html);

        const sure  = document.getElementById("are-you-sure");
        const links = document.querySelectorAll("a");

        links.forEach(link => {
            link.addEventListener("mouseenter", (e) => {
                sure.style.display = "block";
                sure.style.left = e.pageX + 10 + "px";
                sure.style.top  = e.pageY + 10 + "px";
            });
            
            link.addEventListener("mousemove", (e) => {
                sure.style.left = e.pageX + 10 + "px";
                sure.style.top  = e.pageY + 10 + "px";
            });

            link.addEventListener("mouseleave", () => {
                sure.style.display = "none";
            });

        });
        
    });