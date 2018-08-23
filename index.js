dodger.style.backgroundColor = "teal"

dodger.style.left // "180px"
dodger.style.bottom // "0px"

dodger.style.bottom = '0px'

document.addEventListener('keydown', function(e) {
  console.log(e.which)
})

var dodger = document.getElementById('dodger')

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
})
