
var titleSpan = document.querySelector('h4 span')
var textSpan = document.querySelector('.quote span')
var btn = document.querySelector('.btn')
async function randomText(){
    var randomApi = 'https://api.adviceslip.com/advice'
    var data = await fetch(randomApi).then(response => response.json())
    titleSpan.innerHTML = `${data.slip.id}`
    textSpan.innerHTML = `${data.slip.advice}`

}

btn.addEventListener('click', randomText)

