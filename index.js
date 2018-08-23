dodger.style.backgroundColor = "teal"

dodger.style.left // "180px"
dodger.style.bottom // "0px"

dodger.style.bottom = '0px'

document.addEventListener('keydown', function(e) {
  console.log(e.which)
})

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)
 
    dodger.style.left = `${left - 1}px`
  }
})