const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]



function init() {
  // Write your JavaScript code inside the init() function

  let index = 0

  const body = document.querySelector('body')

  body.addEventListener('keydown', function(x) {
    const current = parseInt(x.detail || x.which || x.location)
    if (current === code[index]){
      index++
      if (index === code.length) {
        alert("you win!")
        index = 0
      }
    } else {
      index = 0
    }
  })
}