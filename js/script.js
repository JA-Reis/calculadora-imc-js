function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonclick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonclick);
  inputHeight.addEventListener('input', handleButtonclick);

  handleButtonclick();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonclick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var imcFaixa = document.querySelector('#imc-faixa');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formatedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formatedImc;

  if (imc >= 16.0 && imc < 17) {
    imcFaixa.textContent =
      'Este valor considera que você está Muito abaixo do peso.';
  } else if (imc >= 17 && imc < 18.5) {
    imcFaixa.textContent = 'Este valor considera que você está Abaixo do peso.';
  } else if (imc >= 18.5 && imc < 25) {
    imcFaixa.textContent =
      'Este valor considera que você está com o peso Normal.';
  } else if (imc >= 25 && imc < 30) {
    imcFaixa.textContent = 'Este valor considera que você está Acima do peso.';
  } else if (imc >= 30 && imc < 35) {
    imcFaixa.textContent =
      'Este valor considera que você está em Obesidade Grau I.';
  } else if (imc >= 35 && imc <= 40) {
    imcFaixa.textContent =
      'Este valor considera que você está em Obesidade Grau II.';
  } else {
    imcFaixa.textContent = 'Este valor é inválido!';
  }
}

start();
