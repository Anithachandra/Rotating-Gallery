//image container
const imageContainer = document.querySelector(".image-container")
//previous button
const prevBtn = document.getElementById("prev")
//next button
const nextBtn  = document.getElementById("next")

// console.log(imageContainer);
// console.log(prevBtn);
// console.log(nextBtn);

prevBtn.addEventListener("click", ()=>{
    x=x + 45;
    rotate();
})
nextBtn.addEventListener("click", ()=>{
    x=x - 45;
    rotate();
})

let x=0;
function rotate(){
    imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`
}
