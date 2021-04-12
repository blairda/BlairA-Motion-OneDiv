import { gsap } from "gsap";

// gsap.to("#shape", { duration: 1, x: 800 });

// gsap.from("#blue-square", { duration: 4, scale: 2, alpha: 0, delay: 2, repeat: -1, yoyo: true });

let shapeTL = gsap.timeline();

// shapeTL.from("#shape", {duration: 1, })
shapeTL.to("#shape", { duration: 1, y: 600 })
    .to("#shape", { duration: .25, scaleX: 2 })
    .to("#shape", { duration: .25, scaleX: 1 })
    .to("#shape", { duration: .25, scaleY: 2, transformOrigin: "center bottom" })
    .to("#shape", { duration: .25, scaleY: 1 })
    .to("#shape", {duration: 2, ease: "elastic.inOut(1, 0.5)", y: -1})
    .to("#shape", { duration: 1, x: 600, scale: 0.5 });