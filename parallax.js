function parallaxActive() {
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
        document.querySelectorAll(".object").forEach(function (move) {
            var moving_value = move.getAttribute("data-value");
            var x = (e.clientX * moving_value) / 250;
            var y = (e.clientY * moving_value) / 250;

            move.style.transform =
                "translateX(" + x + "px) translateY(" + y + "px)";
        });
    }
}

document.addEventListener('mousemove', (event) => {
    
        // Update image position based on mouse coordinates
        image.style.left = mouseX + 'px';
        image.style.top = mouseY + 'px';
});
parallaxActive();

