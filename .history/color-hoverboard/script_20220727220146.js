const container = document.getElementById('container')
const colors = ['#ec74c3c','#8e44ad','#3498db','#e67e22','#2ecc71','#be71a2']
const SQUARES  = 500

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    container.appendChild(square)
}

