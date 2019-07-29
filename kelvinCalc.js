//the forecast says it's 293K
const kelvin = 0;
//celsius is 273 degrees less than kelvin
const celsius = kelvin - 273;
//fahrenheit maths
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
//newtonian maths
let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature is ${kelvin} degrees Kelvin, which is ${fahrenheit} degrees Fahrenheit.`);
console.log(`That's ${celsius} degrees Celsius.`);
console.log(`And ${newton} degrees Newton.`);
