let image = document.querySelector("#img")
image.addEventListener("mouseover",()=>{
    console.log(image.src)
    image.src = "./zara new.png"
})

image.addEventListener("mouseout",()=>{
    console.log(image.src)
    image.src = "./zara.png"
})