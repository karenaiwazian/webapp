const tg = Telegram.WebApp

if (tg.platform != 'unknown')
{
    document.documentElement.setAttribute('data-theme', tg.colorScheme)
}

tg.onEvent('mainButtonClicked', FillCheck)

function FillCheck()
{
    if (!CheckInputs()) return
    if (!CheckRadios()) return
    Invoice()
}

function CheckInputs()
{
    return fullname.value.trim() == '' || institution.value.trim() == '' || locality.value.trim() == '' ? false : true
}

function CheckRadios()
{
    for (const name of ['level', 'seet'])
    {
        if (!document.querySelector(`input[type="radio"][name="${name}"]:checked`))
        {
            return false
        }
    }
    return true
}

function Invoice()
{
    tg.openInvoice('https://t.me/$bBguKQzwMUlLBwAARgMpmzr59iM')
}

const diplomContainer = document.querySelector('.diplom-container')

function createImg(url)
{
    let img = document.createElement('div')
    img.className = 'img'
    img.style.backgroundImage = `url('${url}')`

    let name = document.createElement('div')
    name.className = 'name'

    let institution = document.createElement('div')
    institution.className = 'institution'

    let locality = document.createElement('div')
    locality.className = 'locality'

    img.appendChild(name)
    img.appendChild(institution)
    img.appendChild(locality)
    diplomContainer.appendChild(img)
}

for (let index = 0; index < 5; index++)
{
    createImg('ton.png')
}

const fullname = document.querySelector("input[name='fullname']")
const institution = document.querySelector("input[name='institution']")
const locality = document.querySelector("input[name='locality']")

fullname.addEventListener('input', (e) =>
{
    document.querySelectorAll('div.name').forEach(name =>
        name.innerText = e.target.value
    )
    FillCheck()
})

institution.addEventListener("input", (e) =>
{
    document.querySelectorAll('div.institution').forEach(name =>
        name.innerText = e.target.value
    )
    FillCheck()
})

locality.addEventListener('input', (e) =>
{
    document.querySelectorAll('div.locality').forEach(name =>
        name.innerText = e.target.value
    )
    FillCheck()
})

document.querySelectorAll('button[data-modal]').forEach(button => 
{
    button.addEventListener('pointerup', () => 
    {
        const modalId = button.getAttribute('data-modal')
        const modal = document.getElementById(modalId)
        const inputs = Array.from(modal.querySelectorAll('input'))
        const closeBtn = modal.querySelector('button')
        const span = button.querySelectorAll('span')[1]

        document.body.style.overflow = 'hidden'

        modal.showModal()
        modal.removeAttribute('inert')

        inputs.forEach(input => input.addEventListener('click', updateSpan))

        closeBtn.addEventListener('pointerup', closeModal)
        document.addEventListener('pointerup', checkClick)

        function checkClick(e)
        {
            if (e.target != modal) return

            closeBtn.removeEventListener('pointerup', closeModal)
            document.removeEventListener('pointerup', checkClick)
            closeModal()
        }

        function closeModal()
        {
            modal.classList.add('close-modal')
            setTimeout(() =>
            {
                modal.close()
                modal.setAttribute('inert', '')
                modal.classList.remove('close-modal')
                inputs.forEach(input => input.removeEventListener('click', updateSpan))
                document.body.style.overflow = ''
            }, 100)
        }

        function updateSpan(e)
        {
            span.textContent = e.target.value
            closeModal()
        }
    })
})

let isScroll = false
diplomContainer.addEventListener("wheel", (e) =>
{
    if (e.ctrlKey) return

    e.preventDefault()

    if (isScroll) return

    isScroll = true

    let scrolls = e.deltaY >= 0 ? diplomContainer.scrollLeft + 150 : diplomContainer.scrollLeft - 150

    diplomContainer.scrollTo({
        top: 0,
        left: scrolls,
        behavior: 'smooth'
    })

    setTimeout(() => isScroll = false, 250)
})
