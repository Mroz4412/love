const text = document.getElementById("loveText");

const animation = new mojs.Timeline().add(
    new mojs.Html({
        el: text,
        duration: 1000,
        opacity: { 0: 1 },
        scale: { 0.5: 1 },
        easing: "sin.out",
    })
);

animation.play();
