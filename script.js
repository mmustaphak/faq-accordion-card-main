const arrow1 = document.querySelector(".arrow-1")
const arrow2 = document.querySelector(".arrow-2")
const arrow3 = document.querySelector(".arrow-3")
const arrow4 = document.querySelector(".arrow-4")
const arrow5 = document.querySelector(".arrow-5")
const subtitle = document.getElementById("subtitle-1")

let click = false
arrow1.addEventListener("click",function(){
    arrow1.classList.toggle("flip")
    if(click){
        
    }
})
arrow2.addEventListener("click",function(){
    arrow2.classList.toggle("flip")
})
arrow3.addEventListener("click",function(){
    arrow3.classList.toggle("flip")
})
arrow4.addEventListener("click",function(){
    arrow4.classList.toggle("flip")
})
arrow5.addEventListener("click",function(){
    arrow5.classList.toggle("flip")
})