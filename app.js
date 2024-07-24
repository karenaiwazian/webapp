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
        document.querySelector("main").setAttribute("inert", "")
        const modalId = e.target.getAttribute("data-modal")
        const modal = document.getElementById(modalId)
        const inputs = Array.from(modal.querySelectorAll("input"))
        const closeBtn= modal.querySelector("button")
        
        modal.showModal()
        
        inputs.forEach(input => 
        {
            input.addEventListener("click", (e) =>            
            {
                button.innerText = e.target.value
                closeModal()
            })
        })
        
        closeBtn.addEventListener("pointerup", closeModal)
        
        function closeModal()
        {
            modal.close()
            document.querySelector("main").removeAttribute("inert")
            closeBtn.removeEventListener("pointerup", closeModal)
        }
    })
})

let tg = window.Telegram.WebApp
document.getElementById("them").innerText = tg.colorScheme
