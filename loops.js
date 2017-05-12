var array = []

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
      console.log(array)
    }
      else {
        array.push("I am " + i + " strange loops.")
        console.log(array)
      }
    }
    return array
}

function whileLoop(startCounter) {
  while (startCounter > 0) {
    console.log(startCounter -= 1);
  }
  return `done`
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(array) {
  do {
    array.length = (array.length - 1)
  }
  while (array.length > 0 && maybeTrue())
  return array
}
