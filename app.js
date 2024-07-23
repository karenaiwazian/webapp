const imgContainer = document.querySelector(".img-container")

function createImg(url) {
    const img = document.createElement("div")
    img.className = "img"
    img.style.backgroundImage = `url('${url}')`
    
    const name = document.createElement("div")
    name.className = "name"

    img.appendChild(name)
    imgContainer.appendChild(img)
}

createImg("ton.png")
createImg("ton.png")
createImg("ton.png")

document.querySelector("input[name='username']").addEventListener("input", (e) => {
    let text = e.target.value
document.querySelectorAll("div.name").forEach(name => {
      name.innerText = text  
    })
})

document.querySelectorAll("button[data-modal]").forEach(button => {
    button.addEventListener("click", (e) => {
        const modalId = e.target.getAttribute("data-modal")
        const modal = document.getElementById(modalId)
        const closeBtn = modal.querySelector("button")
    
        modal.showModal()
        modal.addEventListener("click", closeModal)
        closeBtn.addEventListener("click", closeModal)
        
        function closeModal() {
            modal.close()
            modal.removeEventListener("click", closeModal)
            closeBtn.removeEventListener("click", closeModal)
        }
    })
})
