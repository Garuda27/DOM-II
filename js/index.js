// Your code goes here

//These are all finished and working

//wheel
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.001;
    scale = Math.min(Math.max(.5, scale), 2);
    wheel.style.transform = `scale(${scale})`;
  }
  let scale = 1;
  const wheel = document.querySelector('img');
  wheel.onwheel = zoom;

//mouseover
let nav = document.querySelector("nav");
nav.addEventListener("mouseover", function(event){
    event.target.style.color = "red";
    setTimeout(function() {
        event.target.style.color = "";
      }, 200);
    }, false);

//keydown
document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 229) {
       
      return;
    }
    console.log("Key pressed!")
  });    

//Still working on these

// //scroll
// let last_known_scroll_position = 0;
// let ticking = false;
// function scroll(scroll_pos){
//     event.preventDefault();
// }
// //resize
// const heightOutput = document.querySelector('#height');
// const widthOutput = document.querySelector('#width');

// function reportWindowSize() {
//   heightOutput.textContent = window.innerHeight;
//   widthOutput.textContent = window.innerWidth;
// }

// window.onresize = reportWindowSize;
// //dblclick
// let text = document.querySelector("text-content");
// text.addEventListener("dblclick", function(e){
//     text.classList.toggle("large");
// })



