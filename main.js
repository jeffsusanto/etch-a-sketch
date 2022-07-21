const container = document.querySelector('.container')
const button = document.querySelector('.set')
const pixel = document.querySelector('.pixel')
button.addEventListener('click', () => {
    size = prompt('enter any number')
    reset();
    newSketch(size)  ;
})

const newSketch = function (size) {
    for (let i = 0; i < size * size; i++) {
        const pixel = document.createElement('div')
        pixel.classList.toggle(`pixel`)
        pixel.style.width = 500/size + 'px'
        pixel.style.height = 500/size + 'px'
     
        container.appendChild(pixel)
        
    
    }

    const divPixel = document.querySelectorAll('.pixel');
    divPixel.forEach(item => item.addEventListener("mouseover",() => {
      item.style.backgroundColor = 'black'
      item.style.borderColor = 'black'
    }))
}
 const reset = function () {
   while(container.firstChild) {
    container.removeChild(container.firstChild);
   }
 }

