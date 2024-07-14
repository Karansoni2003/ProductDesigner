const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouseFollower(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;})}
    
circleMouseFollower();

gsap.from("#nav",{
    transform:"translateY(0)",
    duration:0.5,
    // stagger:1,
})

gsap.to(".hero-heading h1",{
    transform:"translateY(0)",
    duration:0.8,
    // stagger:1,
})

