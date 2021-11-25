let textToInverseElement = document.getElementById('text_to_inverse');

function inverse(str = '') {
  let strLength = str.length - 1;
  let strInversed = '';

  for (let i = strLength; i >= 0; i--) {
    let lastCharacter = str[i];
    strInversed += lastCharacter;
  }

  return strInversed;
}

textToInverseElement.oninput = () => {
  let textInversedElement = document.getElementById('text_inversed');
  textInversedElement.value = inverse(textToInverseElement.value);
};