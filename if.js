const verifyAge = function (age) {
  if (age >= 18) {
    return 'Bienvenido';
  }

  return 'Rechazado';
};

let ana = 17;

console.log(verifyAge(ana));

ana = 21;

console.log(verifyAge(ana));
