// gsap.from(".page1 .box",{
//     scale:0,
//     duration:1,
//     delay:1,
//     rotate:360,
// });


// gsap.from(".page2 .box", {
//     scale: 0,
//     duration: 1,
//     delay: 1,
//     rotate: 360,
//     scrollTrigger: {
//         trigger: ".page2 .box",
//         scoller:"body",
//         markers:true,
//         start:"top 80%",
//     }

// });


gsap.from(".page2 h1",{
    opacity:0,
    y:-100,
   duration:2,
   scrollTrigger:{
    trigger:".page2 h1",
    scoller:"body",
    markers:true,
    start:"top 50%",
    end:"top 80%",
    scrub:2,
   
   }
    
})

gsap.from(".page2 h2",{
    opacity:0,
    y:300,
   duration:2,
   scrollTrigger:{
    trigger:".page2 h2",
    scoller:"body",
    markers:true,
   
   }
    
})