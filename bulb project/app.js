let onBtn = document.querySelector("#ON")
console.log(onBtn)

onBtn.addEventListener("click",()=> {
    console.log("running")
    let bulb = document.querySelector("#img")
    bulb.src = "./images/on.png"
})

let offBtn = document.querySelector("#OFF")
offBtn.addEventListener("click",()=>{
    console.log("running")
    let bulbImg = document.querySelector("#img")
    bulbImg.src = "./images/off.png"
})