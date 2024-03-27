

const os = require('os')

console.log(os.type())
console.log(os.version())
console.log(os.freemem())
console.log(os.cpus())

// Linux
// #26-Ubuntu SMP PREEMPT_DYNAMIC Tue Mar  5 21:19:28 UTC 2024
// 12218671104
// [
//   {
//     model: '13th Gen Intel(R) Core(TM) i7-13620H',
//     speed: 3069,
//     times: { user: 54520, nice: 0, sys: 18670, idle: 3042230, irq: 0 }
//   },
//   {
//     model: '13th Gen Intel(R) Core(TM) i7-13620H',
//     speed: 399,
//     times: { user: 28100, nice: 0, sys: 8620, idle: 3077810, irq: 0 }
//   },
//   {
//     model: '13th Gen Intel(R) Core(TM) i7-13620H',
//     speed: 3816,
//     times: { user: 59600, nice: 0, sys: 24220, idle: 3035040, irq: 0 }
//   },
//   {
//     model: '13th Gen Intel(R) Core(TM) i7-13620H',
//     speed: 566,
//     times: { user: 23180, nice: 0, sys: 7960, idle: 3099700, irq: 0 }
//   },
//   {
//     model: '13th Gen Intel(R) Core(TM) i7-13620H',
//     speed: 4698,
//     times: { user: 190320, nice: 0, sys: 31120, idle: 2893820, irq: 0 }
//   },
//   {
//     model: '13th Gen Intel(R) Core(TM) i7-13620H',
//     speed: 4839,
//     times: { user: 158130, nice: 0, sys: 20810, idle: 2947820, irq: 0 }
//   },
//   {
//     model: '13th Gen Intel(R) Core(TM) i7-13620H',
//     speed: 3128,
//     times: { user: 160100, nice: 700, sys: 29900, idle: 2927790, irq: 0 }
//   },
//   {
//     model: '13th Gen Intel(R) Core(TM) i7-13620H',
//     speed: 4794,
//     times: { user: 176410, nice: 0, sys: 33540, idle: 2897180, irq: 0 }
//   },
//   {
//     model: '13th Gen Intel(R) Core(TM) i7-13620H',
//     speed: 2027,
//     times: { user: 109240, nice: 20, sys: 40550, idle: 2944200, irq: 0 }
//   },
//   {
//     model: '13th Gen Intel(R) Core(TM) i7-13620H',
//     speed: 3402,
//     times: { user: 43230, nice: 0, sys: 11950, idle: 3074280, irq: 0 }
//   },
//   {
//     model: '13th Gen Intel(R) Core(TM) i7-13620H',
//     speed: 400,
//     times: { user: 105740, nice: 0, sys: 39700, idle: 2975040, irq: 0 }
//   },
//   {
//     model: '13th Gen Intel(R) Core(TM) i7-13620H',
//     speed: 400,
//     times: { user: 26740, nice: 0, sys: 7220, idle: 3069150, irq: 0 }
//   },
//   {
//     model: '13th Gen Intel(R) Core(TM) i7-13620H',
//     speed: 1318,
//     times: { user: 73250, nice: 0, sys: 27360, idle: 3018580, irq: 0 }
//   },
//   {
//     model: '13th Gen Intel(R) Core(TM) i7-13620H',
//     speed: 1484,
//     times: { user: 55000, nice: 0, sys: 20300, idle: 3047040, irq: 0 }
//   },
//   {
//     model: '13th Gen Intel(R) Core(TM) i7-13620H',
//     speed: 400,
//     times: { user: 40940, nice: 0, sys: 15240, idle: 3068320, irq: 0 }
//   },
//   {
//     model: '13th Gen Intel(R) Core(TM) i7-13620H',
//     speed: 1778,
//     times: { user: 30390, nice: 0, sys: 11780, idle: 3084110, irq: 0 }
//   }
// ]

// [Done] exited with code=0 in 0.023 seconds



// __dirname
// __filename
console.log(__dirname);
console.log(__filename)


// /home/vikram/Desktop/Node-Js-Backend/OS
// /home/vikram/Desktop/Node-Js-Backend/OS/app.js


const path = require('path');

console.log(path.dirname(__filename));
// /home/vikram/Desktop/Node-Js-Backend/OS

console.log(path.basename(__filename));
// /home/vikram/Desktop/Node-Js-Backend/OS
// app.js

console.log(path.extname(__filename));

console.log(path.parse(__filename));

/home/vikram/Desktop/Node-Js-Backend/OS
app.js
.js
{
  root: '/',
  dir: '/home/vikram/Desktop/Node-Js-Backend/OS',
  base: 'app.js',
  ext: '.js',
  name: 'app'
}



