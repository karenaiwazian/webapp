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
createImg("ton.png")
createImg("ton.png")

document.querySelector("input[name='username']").addEventListener("input", (e) => {
    let text = e.target.value
document.querySelectorAll("div.name").forEach(name => {
      name.innerText = text  
    })
})

document.querySelectorAll("button[data-modal]").forEach(button => 
{
    button.addEventListener("pointerup", (e) => 
        {
        const modalId = e.target.getAttribute("data-modal")
        const modal = document.getElementById(modalId)
        const inputs = Array.from(modal.querySelectorAll("input"))
        const closeBtn= modal.querySelector("button")
        
        modal.showModal()
        setTimeout(() => {      
            modal.removeAttribute("inert")
        })              
        inputs.forEach(input => {
            input.addEventListener("click", (e) => {
                button.innerText = e.target.value
                closeModal()
            })
        })
        
        closeBtn.addEventListener("pointerup", closeModal)
        document.addEventListener("pointerup", checkClick)
        
        function checkClick(e) {
            if (e.target != modal) {
                return
            }
            closeBtn.removeEventListener("pointerup", closeModal)
            document.removeEventListener("pointerup", checkClick)
            closeModal()
        }
        
        function closeModal() {
            modal.classList.add("close-modal")
            setTimeout(() => {
                modal.close()
                modal.setAttribute("inert", "")
                modal.classList.remove("close-modal")
            }, 100)
        }
    })
})


let tg = window.Telegram.WebApp

tg.MainButton.show()
tg.MainButton.onClick(() => {
    tg.shopPopup({
        title: "Внимание",
        message: "Вы нажали на кнопку"
    })
})
