let eq = 0;
let average = (...rest) => {rest.forEach(x => eq += x); eq = eq/rest.length; console.log(Math.floor(eq));}
average(1) // 1
average(1, 3) // 2
average(1, 3, 6, 6) // 4
