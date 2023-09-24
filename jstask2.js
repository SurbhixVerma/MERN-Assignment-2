function sortStringAlphabetically(inputString) {
    const charArray = inputString.split('');
    const sortedArray = charArray.sort();
    const sortedString = sortedArray.join('');
    return sortedString;
  }

  const inputString = 'webmaster';
  const sortedResult = sortStringAlphabetically(inputString);
  console.log(sortedResult); 
  