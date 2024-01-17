/* 
n = 7
*
**
***
****
*****
******
*******
*/

const printFloor = (size) => {
  let str = '';

  for (let i = 0; i < size; i++) {
    // str = str + '*';
    str += '*';
  }

  return str;
};

const printTree = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(printFloor(i));
  }
};

// printTree(1); // *

printTree(4);// *
             // **
             // ***


// console.log(printFloor(1)); // *
// console.log(printFloor(2)); // **
// console.log(printFloor(3)); // ***
// console.log(printFloor(4)); // ****