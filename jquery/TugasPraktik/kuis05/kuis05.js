function fibonacci(input) {
    if (input <= 0) {
      return 0;
    } else if (input === 1) {
      return 1;
    } else {
      return fibonacci(input - 1) + fibonacci(input - 2);
    }
  }
  
  const fibonacciList = document.getElementById('fibonacci-list');
  const limit = 8; 
  
  for (let i = 0; i < limit; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `Fibonacci(${i}) = ${fibonacci(i)}`;
    fibonacciList.appendChild(listItem);
  }
  