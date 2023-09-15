function processNumber(number) {
    if (number % 15 === 0) {
      return "gamelab indonesia";
    } else if (number % 5 === 0) {
      return "gamelab";
    } else if (number % 3 === 0) {
      return "game";
    } else {
      return "";
    }
  }
  
  function generateOutput(start, end) {
    let output = "";
    for (let i = start; i <= end; i++) {
      const result = processNumber(i);
      if (result) {
        output += result + " ";
      }
    }
    return output;
  }
  
  const testCases = [
    { start: 1, end: 5 },
    { start: 6, end: 15 },
    { start: 16, end: 30 }
  ];
  
  testCases.forEach((testCase, index) => {
    const result = generateOutput(testCase.start, testCase.end);
    console.log(`Hasil uji ke-${index + 1} adalah`);
    console.log(result);
    console.log();
  });
  