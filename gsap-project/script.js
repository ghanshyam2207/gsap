gsap.from(".page1 .box",{
        x:-200,
    opacity:0,
    duration:2,
    delay:1,
   
})


gsap.from(".page2 .box",{
    y:100,
  opacity:0,  
 duration:2,
  delay:1,
  repeat:1,
 
  scrollTrigger:{
    trigger:".page2 .box",
    scroller:"body",
  }

})