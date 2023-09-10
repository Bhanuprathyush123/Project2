// Generating Color

const randomColor = function () {
     const hex = '0123456789ABCDEF';
     let color = "#";
     for (let i = 0; i < 6; i++) {
          color += hex[Math.floor(Math.random() * 16)];
     }
     return color;
};
  

const setChangeColor = function(){
     document.body.style.backgroundColor = randomColor();
     document.querySelector("#colorGen").innerHTML = randomColor();
}

document.querySelector('#changeColor').addEventListener('click', setChangeColor)

// console.log("Color : ", randomColor());