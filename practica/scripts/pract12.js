const heart = document.getElementById('heart')
let duration

heart.addEventListener('animationstart', (e) => {
  duration = getComputedStyle(e.target).animationDuration
})

let cont = 0
heart.addEventListener('animationiteration', (e) => {
  cont++
  console.log(cont)
  const animationName = getComputedStyle(e.target).animationName
  if (animationName == 'heart-beat' && cont % 2 == 0) {
    e.target.style.setProperty('animation-name', 'heart-rotate')
  } else if (animationName == 'heart-rotate' && cont % 2 == 0)
    e.target.style.setProperty('animation-name', 'heart-beat')
})

heart.addEventListener('animationcancel', (e) => {

})

heart.addEventListener('animationend', (e) => {
  console.log('END')
  e.target.classList.remove('heart--animate')
  setTimeout(() => {
    e.target.classList.add('heart--animate')
  }, 0);
})