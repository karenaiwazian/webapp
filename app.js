let tg = window.Telegram.WebApp
let active = false

document.querySelector("button").addEventListener('click', () => {
    backbut()
})

document.querySelector("html").setAttribute("data-theme", tg.colorScheme)

function backbut() {
    if (active) {
        tg.BackButton.hide()
        active = false
    } else {
        tg.BackButton.show()
        active = true
    }
}

document.querySelector("input[name='username']").addEventListener("input", (e) => {
    if (e.target.value.length <= 0) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.show()
        tg.MainButton.text = ""
        tg.MainButton.showProgress(true)
        setTimeout(() => {
            tg.MainButton.hideProgress()
            tg.MainButton.text = "CONTINUE"
        }, 2000)
    }
})
