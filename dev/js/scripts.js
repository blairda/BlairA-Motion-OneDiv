import { gsap } from "gsap";

// gsap.to("#shape", { duration: 1, x: 800 });

// gsap.from("#blue-square", { duration: 4, scale: 2, alpha: 0, delay: 2, repeat: -1, yoyo: true });

let shapeTL = gsap.timeline();

// shapeTL.from("#shape", {duration: 1, })
shapeTL.to("#shape", { duration: 1.5, y: 550, rotate: 360 })
    .to("#shape", { duration: .25, scaleX: 2.5, scaleY: 0.5 })
    .to("#shape", { duration: .2, scaleX: 1, scaleY: 1 })
    .to("#shape", { duration: .25, scaleX: 0.5, scaleY: 2, transformOrigin: "center bottom" })
    .to("#shape", { duration: .5, scaleX: 1, scaleY: 1 })
    .to("#shape", {duration: 2, ease: "elastic.inOut(1, 0.5)", y: -1})
    .to("#shape", { duration: .75, x: 700, scale: 0.5, rotate: 180 })
    .to("#shape", { duration: .5, skewY: 45, scale: 1 })
    .to("#shape", { duration: .5, skewY: 0 })
    .to("#shape", { duration: .25, alpha: 0.5, repeat: 3, yoyo: true, rotateY: 90 })
    .to("#shape", {duration: 1.75, ease: "power4.out", y: 300 })
    .to("#shape", { duration: 1, ease: "circ.out", y: 500, x: -15 })
    ;