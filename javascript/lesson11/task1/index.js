const splitText = (text, length = 10) => {
  const strArr = [];
  let startPosition = 0;

  while (true) {
    if (text !== String(text)) {
      return null;
    }
    const chunk = text.substr(startPosition, length);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += length;
  }
  return strArr.join('\n');
};

console.log(splitText('dfgvbhnjmklkmnjbhvgfcxdsz'));
