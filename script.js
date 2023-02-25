const arrow1 = document.querySelector(".arrow-1")
const arrow2 = document.querySelector(".arrow-2")
const arrow3 = document.querySelector(".arrow-3")
const arrow4 = document.querySelector(".arrow-4")
const arrow5 = document.querySelector(".arrow-5")
const subtitle = document.getElementById("subtitle-1")
const ulEl1 = document.getElementById("ul-el1")
const ulEl2 = document.getElementById("ul-el2")
const ulEl3 = document.getElementById("ul-el3")
const ulEl4 = document.getElementById("ul-el4")
const ulEl5 = document.getElementById("ul-el5")


let click1 = true
arrow1.addEventListener("click",function(){
    arrow1.classList.toggle("flip")

    if(click1){
        ulEl1.innerHTML = `You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.`
        click1 = false
    }else{
        ulEl1.innerHTML = ""
        click1 = true
    }
})
let click2 = true
arrow2.addEventListener("click",function(){
    arrow2.classList.toggle("flip")

    if(click2){
        ulEl2.innerHTML = `No more than 2GB. All files in your account must fit your allotted storage space.`
        click2 = false
    }else{
        ulEl2.innerHTML = ""
        click2 = true
    }
})
let click3 = true
arrow3.addEventListener("click",function(){
    arrow3.classList.toggle("flip")
    if(click3){
        ulEl3.innerHTML = `Click “Forgot password” from the login page or “Change password” from your profile page.`
        click3 = false
    }else{
        ulEl3.innerHTML = ""
        click3 = true
    }
})
let click4 = true
arrow4.addEventListener("click",function(){
    arrow4.classList.toggle("flip")
    if(click4){
        ulEl4.innerHTML = `Chat and email support is available 24/7. Phone lines are open during normal business hours.`
        click4 = false
    }else{
        ulEl4.innerHTML = ""
        click4 = true
    }
})
let click5 = true
arrow5.addEventListener("click",function(){
    arrow5.classList.toggle("flip")
    if(click5){
        ulEl5.innerHTML = `You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.`
        click5 = false
    }else{
        ulEl5.innerHTML = ""
        click5 = true
    }
})