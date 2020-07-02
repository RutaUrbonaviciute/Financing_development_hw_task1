const fileUrl = './input.txt'

fetch(fileUrl)
  .then(r => r.text())
  .then(t => alert(polymerReduction(t.split(''))))

const polymerReduction = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].toLowerCase() == arr[i + 1].toLowerCase() && arr[i] !== arr[i + 1]) {
      arr.splice(i, 2)
    }
    if (i > 1) {
      if (arr[i].toLowerCase() == arr[i - 1].toLowerCase() && arr[i] !== arr[i - 1]) {
        arr.splice(i - 1, 2)
      }
    }
  }
  return arr.length
}
