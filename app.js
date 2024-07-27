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

document.querySelector("input[name='fullname']").addEventListener("input", (e) => {
    let text = e.target.value
document.querySelectorAll("div.name").forEach(name => {
      name.innerText = text  
    })
})

document.querySelectorAll("button[data-modal]").forEach(button => 
{
    button.addEventListener("pointerup", () => 
        {
        const modalId = button.getAttribute("data-modal")
        const modal = document.getElementById(modalId)
        const inputs = Array.from(modal.querySelectorAll("input"))
        const closeBtn = modal.querySelector("button")
        document.body.style.overflow = "hidden"
        modal.showModal()
        setTimeout(() => {      
            modal.removeAttribute("inert")
        })
        const span = button.querySelectorAll("span")[1]
        inputs.forEach(input => {
            input.addEventListener("click", updateSpan)
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
                inputs.forEach(input => {
                input.removeEventListener("click", updateSpan);
            });
            document.body.style.overflow = ""
            }, 100)
        }
        
        function updateSpan(e) {
            span.textContent = e.target.value
            closeModal()
        }
    })
})

const tg = Telegram.WebApp

tg.MainButton.text = "Продолжить"
tg.MainButton.show()
tg.MainButton.onClick(() => {
    tg.BackButton.show()
    location.href = "payments.html"
})
