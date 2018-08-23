

var dodger = document.getElementById('dodger')

dodger.style.backgroundColor = "teal"

dodger.style.left // "180px"
dodger.style.bottom // "0px"

dodger.style.bottom = '0px'


function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 10}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
})
