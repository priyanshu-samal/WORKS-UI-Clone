function loading() {
  var tl = gsap.timeline();

  tl.to("#yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.5,
    ease: "expo.height",
  });

  tl.from(
    "#yellow2",
    {
      top: "-100%",
      delay: 0.6,
      duration: 0.7,
      ease: "expo.out",
    },
    "anime"
  );

  tl.to(
    "#loader h1",
    {
      delay: 0.6,
      duration: 0.7,
      color: "black",
    },
    "anime"
  );
  tl.to("#loader", {
    opacity: 0,
  });
  tl.to("#loader", {
    display: "none",
  });
}

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
scroll.on("click",function(){

})


var elem=document.querySelectorAll(".elem")
var page2=document.querySelector("#page2")
elem.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        var bgimg=ele.getAttribute("data-img")
       page2.style.backgroundImage=`url(${bgimg})`
    })

})

document.querySelector("footer h2").addEventListener("click",()=>{
    scroll.scrollTo(0)
})


loading();
