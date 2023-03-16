gsap.config({ trialWarn: false });

gsap.set("svg", {
    visibility: "visible"
});
gsap.set(".large", {
    scale: 1.021,
    transformOrigin: "50% 50%"
});
function updatePos() {
    gsap.set(".large", {
        opacity: "random(0.7, 0.9)"
    });
    gsap.set(".largeMask", {
        x: "random(50, 600)",
        y: "random(100, 500)",

        attr: {
            width: "random(4, 190)",
            height: "random(1, 40)"
        }
    });
    let delay = gsap.utils.random(0, 0.1035);
    gsap.delayedCall(delay, updatePos);
    gsap.to(".small", {
        opacity: "random(0.7, 1)",
        repeat: 1,
        yoyo: true,
        duration: delay,
        x: "random(1, -1)",
        y: "random(-1, 1)",
        skewX: "random(2, -1)",
        ease: "steps(1)",
        transformOrigin: "50% 50%"
    });
}
gsap.to("#linesMask g", {
    y: "-=2",
    repeat: -1,
    ease: "none"
});
updatePos();
