const linksConf = document.querySelectorAll("a")

console.log("clickyConfirms link okay" + linksConf);

linksConf.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const confirmed = confirm("Confirm action. Click link?");
        if (confirmed) {
            window.location.href = link.href;
        }
    });
});