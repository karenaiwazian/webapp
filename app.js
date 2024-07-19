let score = document.querySelector('.user-score')
let tg = window.Telegram.WebApp
let active = false

document.querySelector("button").addEventListener('click', () => {
    score.innerHTML++
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

tg.MainButton.hide()
tg.SettingsButton.show()
