let textToInverseElement = document.getElementById('text_to_inverse');

function inverse(str = '') {
  if (str === '') return str;

  let splitedStr = str.split(' ');
  let reversedSplitedStr = splitedStr.map((value, index) => {
    if (value === ' ') return value;

    let valueSplited = value.split('');
    let valueInversed = valueSplited.reverse().join('');

    return valueInversed;
  });
  let strInversed = reversedSplitedStr.join(' ');

  return strInversed;
}

textToInverseElement.oninput = () => {
  let textInversedElement = document.getElementById('text_inversed');
  textInversedElement.value = inverse(textToInverseElement.value);
};