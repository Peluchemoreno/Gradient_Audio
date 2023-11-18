//setting up the variables and arrays that I'll need//
let text = document.querySelector('.tester_text');
let body = document.querySelector('body');
let hex = ["1","2","3","4","5","6","7","8","9","0","A","B","C","D","E","F"]

function changeColor(){
  //creating the necessary variables for the gradient//
  let hex_pattern = [];
  let second_hex_pattern = [];

  //creating 2 hexidecimal groups to become the 2 graident colors
  for (let i=0; i< 6; i++) {
    hex_pattern.push(hex[Math.floor(Math.random() * hex.length)]);
  }
  for (let i=0; i<6; i++){
    second_hex_pattern.push(hex[Math.floor(Math.random() * hex.length)]);
  }

  //converting the arrays from above into strings without commas//
  let final_hex_pattern1 = hex_pattern.join(""); 
  let final_hex_pattern2 = second_hex_pattern.join("");

  //converting the background using the above variables and a template literal//
  body.style.background = `linear-gradient(to bottom, #${final_hex_pattern1}, #${final_hex_pattern2})`;
}

// function animate(){
//   text.style.transform = `scale(1.15)`;
//   setTimeout(() => {
//     text.style.transform = `scale(1)`;
//   }, 75);
// }

text.addEventListener('pointerdown', ()=>{changeColor()
  animate();})