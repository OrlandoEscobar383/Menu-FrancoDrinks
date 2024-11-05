document.addEventListener("scroll", function() {
    document.body.style.backgroundPosition = "center " + (-window.scrollY / 2) + "px";
});
