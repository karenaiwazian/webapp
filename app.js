const tg = Telegram.WebApp

tg.MainButton.text = 'ПРОДОЛЖИТЬ'
tg.onEvent('mainButtonClicked', SendData)

function FillCheck()
{
    if (!CheckInputs() || !CheckRadios())
    {
        tg.MainButton.hide()
        return
    }
    tg.MainButton.show()
}

function CheckInputs()
{
    if (GetInput('fullname').trim() == '' || GetInput('institution').trim() == '' || GetInput('locality').trim() == '')
    {
        return false
    }
    return true
}

function CheckRadios()
{
    for (const name of ['level', 'seet', 'event', 'nomination', 'type'])
    {
        if (!document.querySelector(`input[type="radio"][name="${name}"]:checked`))
        {
            return false
        }
    }
    return true
}

function SendData()
{
    const data = JSON.stringify({
        fullname: GetInput('fullname'),
        institution: GetInput('institution'),
        locality: GetInput('locality'),
        level: GetRadio('level'),
        event: GetRadio('event'),
        seet: GetRadio('seet'),
        type: GetRadio('type'),
    })
    tg.sendData(data)
}

function GetInput(name)
{
    return document.querySelector(`input[type="text"][name="${name}"]`).value
}

function GetRadio(name)
{
    return document.querySelector(`input[type="radio"][name="${name}"]:checked`).value
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

institution.addEventListener('input', (e) =>
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

        inputs.forEach(input => input.addEventListener('click', UpdateSpan))

        closeBtn.addEventListener('pointerup', CloseModal)
        document.addEventListener('pointerup', CheckClick)

        function CheckClick(e)
        {
            if (e.target != modal) return

            closeBtn.removeEventListener('pointerup', CloseModal)
            document.removeEventListener('pointerup', CheckClick)
            CloseModal()
        }

        function UpdateSpan(e)
        {
            FillCheck()
            span.textContent = e.target.value
            CloseModal()
        }

        function CloseModal()
        {
            modal.classList.add('close-modal')
            setTimeout(() =>
            {
                modal.close()
                modal.setAttribute('inert', '')
                modal.classList.remove('close-modal')
                inputs.forEach(input => input.removeEventListener('click', UpdateSpan))
                document.body.style.overflow = ''
            }, 100)
        }
    })
})

let isScroll = false
const DiplomContainer = document.querySelector('.diplom-container')
DiplomContainer.addEventListener("wheel", (e) =>
{
    if (e.ctrlKey) return

    e.preventDefault()

    if (isScroll) return

    isScroll = true

    let scrolls = e.deltaY >= 0 ? DiplomContainer.scrollLeft + 150 : DiplomContainer.scrollLeft - 150

    DiplomContainer.scrollTo({
        top: 0,
        left: scrolls,
        behavior: 'smooth'
    })

    setTimeout(() => isScroll = false, 250)
})
