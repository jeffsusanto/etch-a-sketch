const container = document.querySelector('.container')

const squares = function() {
    for(let i=0; i<16*16; i++){
        const pixel = document.createElement('div')
        pixel.classList.add('pixel')
        container.appendChild(pixel)
    }
}

squares()