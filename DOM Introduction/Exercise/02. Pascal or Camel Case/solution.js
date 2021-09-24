function solve() {
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;
  let endProduct = document.getElementById('result')
  let result = ''

  //1.Lowercase
  let lowerCaseText = text.toLowerCase().split(' ')
  //2. Loop through and split
  for (let i = 0; i < lowerCaseText.length; i++) {

    //3. based on case  - make changes
    if (namingConvention == 'Camel Case') {
      if (i == 0) {
        result += lowerCaseText[i]
      } else {
        result += lowerCaseText[i][0].toUpperCase() + lowerCaseText[i].slice(1)
      }
    } else if (namingConvention == 'Pascal Case') {
      result += lowerCaseText[i][0].toUpperCase() + lowerCaseText[i].slice(1)
    } else {
      result = 'Error!'
      break
    }
  }
  endProduct.textContent = result



}