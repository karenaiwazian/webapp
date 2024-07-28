const imgContainer = document.querySelector(".img-container")

function createImg(url) {
    const img = document.createElement("div")
    img.className = "img"
    img.style.backgroundImage = `url('${url}')`
    
    const name = document.createElement("div")
    name.className = "name"
    const institution = document.createElement("div")
    institution.className = "institution"
    const locality = document.createElement("div")
    locality.className = "locality"

    img.appendChild(name)
    img.appendChild(institution)
    img.appendChild(locality)
    imgContainer.appendChild(img)
}

createImg("ton.png")
createImg("ton.png")
createImg("ton.png")
createImg("ton.png")
createImg("ton.png")

const fullname = document.querySelector("input[name='fullname']")
const institution = document.querySelector("input[name='institution']")
const locality = document.querySelector("input[name='locality']")

fullname.addEventListener("input", (e) => {
    document.querySelectorAll("div.name").forEach(name => {
        name.innerText = e.target.value
    })
    checkInputs()
})
institution.addEventListener("input", (e) => {
    document.querySelectorAll("div.institution").forEach(name => {
        name.innerText = e.target.value
    })
    checkInputs()
})
locality.addEventListener("input", (e) => {
    document.querySelectorAll("div.locality").forEach(name => {
        name.innerText = e.target.value
    })
    checkInputs()
})

function checkInputs() {
    const isEmpty = fullname.value.trim() == "" || institution.value.trim() == "" || locality.value.trim() == ""
    if (!isEmpty) {
        tg.MainButton.show()
        console.log("shoe")
    } else {
        console.log("hode")
    }
}

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
                input.removeEventListener("click", updateSpan)
            })
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
