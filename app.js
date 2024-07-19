let score = document.querySelector('.user-score')

document.querySelector("button").addEventListener('click', () => {
    score.innerHTML++
})

let tg = window.Telegram.WebApp

tg.BackButton.show()
tg.MainButton.hide()
tg.SettingsButton.show()
