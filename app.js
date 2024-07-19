let tg = window.Telegram.WebApp
let active = false

document.querySelector("button").addEventListener('click', () => {
    backbut()
})

function backbut() {
    if (active) {
        tg.BackButton.hide()
        active = false
    } else {
        tg.BackButton.show()
        active = true
    }
}

tg.MainButton.show()
tg.SettingsButton.show()
