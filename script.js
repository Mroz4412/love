document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".text");

    const animation = new mojs.Timeline().add([
        new mojs.Tween({
            duration: 1000,
            easing: "sin.inOut",
            onUpdate: function (progress) {
                textElement.style.transform = `scale(${1 + progress * 0.5})`;
                textElement.style.opacity = progress;
            },
        })
    ]);

    animation.play();
});
