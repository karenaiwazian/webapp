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
        
        const closes = modal.querySelectorAll("input[type='radio'], label, button")
        modal.showModal()
        const cls = Array.from(closes)
        cls.push(modal)
        console.log(cls)
        
        document.addEventListener("click", closeModal)
        
        function closeModal(e) {
            const elem = e.target
            console.log(elem)
            if (!cls.includes(elem)) {
                return
            }
            modal.close()
            document.removeEventListener("click", closeModal)
        }
    })
})

let tg = window.Telegram.WebApp
tg.showAlert("alert")
tg.showPopup({title: "title", message: "msg"})
