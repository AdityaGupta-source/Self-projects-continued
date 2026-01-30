import {colorCodeGenerator } from "./colors.js";

let colors = [];
colorCodeGenerator(colors);
console.log(colors);

function renderColors(){
  const generatePaletteButton = document.querySelector(".js-button-generate-palette");

  generatePaletteButton.addEventListener('click',()=>{
    console.log("buttonClicked");
    let colors = [];
    colorCodeGenerator(colors);
    colorShowing(colors);

  })

  function colorShowing(colors){
    let colorElement = document.querySelector(".colors");
    colorElement.innerHTML = `
      <div class="color0 color">
          <div class="colorShow colorshow0"  style="background-color: ${colors[0]}"></div>
          <div class="textContent">
              <div class="colorName">${colors[0]}</div>
              <div class="copyClipboard"> <i class="fa-regular fa-copy"></i> </div>
          </div>
      </div>
      <div class="color1 color">
          <div class="colorShow" style="background-color: ${colors[1]}"></div>
          <div class="textContent">
              <div class="colorName">${colors[1]}</div>
              <div class="copyClipboard"> <i class="fa-regular fa-copy"></i> </div>
          </div>
      </div>    
      <div class="color2 color">
          <div class="colorShow" style="background-color: ${colors[2]}"></div>
          <div class="textContent">
              <div class="colorName">${colors[2]}</div>
              <div class="copyClipboard"> <i class="fa-regular fa-copy"></i> </div>
          </div>
      </div>
      <div class="color3 color">
          <div class="colorShow" style="background-color: ${colors[3]}"></div>
          <div class="textContent">
              <div class="colorName">${colors[3]}</div>
              <div class="copyClipboard"> <i class="fa-regular fa-copy"></i> </div>
          </div>
      </div>
      <div class="color4 color">
          <div class="colorShow" style="background-color: ${colors[4]}"></div>
          <div class="textContent">
              <div class="colorName">${colors[4]}</div>
              <div class="copyClipboard"> <i class="fa-regular fa-copy"></i> </div>
          </div>
      </div>   
    `;

    const copyButton = document.querySelectorAll(".copyClipboard")
    copyButton.forEach((btn,index) => {
      btn.addEventListener('click',()=>{
        const hex = colors[index];
        navigator.clipboard.writeText(hex);
        console.log(hex);
        btn.innerHTML = "✅";
        setTimeout(() => {
          btn.innerHTML = '<i class="fa-regular fa-copy"></i>';
        }, 800);
      })
    })
    const paletteButton = document.querySelectorAll(".colorShow")
    paletteButton.forEach((btn,index) => {
      btn.addEventListener('click',()=>{
        const hex = colors[index];
        navigator.clipboard.writeText(hex);
      })
    })
  }
  colorShowing(colors);
}
renderColors();
