function reverseNumber(x) {
    const numStr = x.toString();
    const reversedStr = numStr.split('').reverse().join('');
    const reversedNum = parseInt(reversedStr, 10);
  
    return reversedNum;
  }

  const x = 32243;
  const reversed = reverseNumber(x);
  console.log(reversed); 
  