const children = document.getElementById('children')

children.addEventListener('transitionrun', (e) => {
    console.log('RUN')
})

children.addEventListener('transitionstart', (e) => {
    console.log('START')
    e.target.style.border = 'none'
})

children.addEventListener('transitioncancel', (e) => {
    console.log('CANCEL')
})

children.addEventListener('transitionend', (e) => {
    console.log('END')
    e.target.classList.toggle('red')
    e.target.style.border = '5px solid black'
})