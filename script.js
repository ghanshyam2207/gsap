gsap.to(".box1",{
    x:800,
    duration:3,
    delay:1,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
    repeat:-1,
    yoyo:true,

})


gsap.from("h1",{
    color:"red",
    opacity:0,
    y:30,
    duration:2,
    delay:1.5,
    stagger:1
})