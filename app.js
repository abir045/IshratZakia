// function init(){
//     const pages = document.querySelectorAll(".page");
//     const backgrounds = [
//         `radial-gradient(#2B3760,#0F1A43)`
//     ];

// const hamburger = document.querySelectorAll('.hamburger');
// const navopen = document.querySelectorAll('.nav-open') ;
// const contact = document.querySelector('.contact');
// const social = document.querySelector('.social');
// const logo = document.querySelector('.logo');


// const tl = new TimelineMax({paused:true});

// tl.to(navopen, 0.5, {y:0})
// .fromTo(hamburger, 0.5,
//     {opacity:0,y:10},
//     {opacity:1,y:0}
//     );

// hamburger.addEventListener('click',()=>{
    
//     tl.reversed() ? tl.play(): tl.reversed()
// });

// }

// init();





//gsap.to(".hamburger", {y:100,duration:1});


// var tl = gsap.timeline();



// $("hamburger").click(function ()
// {
//     tl.fromTo(".nav-open", {y: -100}, {duration: 1, y: 100});
  
// })

let tween = gsap.to(".nav-open", {x:100,duration:1, paused:true});


document.querySelector(".hamburger").onclick = () =>  tween.play();
document.querySelector(".nav-open").onclick = () =>  tween.reverse();
//document.querySelector(".hamburger").onclick = () => tween.reverse();

function zoomin() { 
    var GFG = document.getElementById("geeks"); 
    var currWidth = GFG.clientWidth; 
    GFG.style.width = (currWidth + 100) + "px"; 
} 


