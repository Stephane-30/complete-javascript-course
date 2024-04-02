// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const forecastTemps = [17, 21, 23];
const forecastTemps2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let printStr = '...';

  for (let i = 0; i < arr.length; i++) {
    printStr += ` ${arr[i]}C in ${i + 1} days ...`;
  }

  console.log(printStr);
}

printForecast(forecastTemps2);
