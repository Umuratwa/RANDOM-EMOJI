
const Emojis =['😊' ,'😒','😉' , '😜', '😎', '🤬'];
// const face = document.querySelector("#face");
// const buto = document.getElementsByTagName("button")
const face  =document.querySelector("#face")
const btn = document.getElementById("button")

btn.addEventListener("click", () =>{
let round = Math.floor(Math.random()*Emojis.length)
let result=  Emojis[round]
face.textContent = result;
});



