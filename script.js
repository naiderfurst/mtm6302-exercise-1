let symbol = document.getElementById('emoji')


let emoji = []

for (let i = 128513; i <= 128542; i++) [
    emoji.push(`<div class="emoji">&#${i}</div> <div class="number">${i}</div>`)
]

emoji.innerHTML = symbol.innerHTML += emoji.join('')

 