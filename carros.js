//Carros x,y e velocidade
xCars = [600, 600, 600, -50, -50, -50];
yCars = [45, 100, 155, 210, 270, 318];
vlCars = [2, 2.5, 3.2, 5, 3.3, 2.3]

//definições de carros
largCar = 50;
altCar = 30;

function mostrarCarros() {
  for(let i = 0; i < imgCarros.length; i++) {
    image(imgCarros[i], xCars[i], yCars[i], largCar, altCar);
  }
}

function movCarros() {
  for(let i = 0; i < xCars.length; i++) {
    if (i <= 2){
      xCars[i] -= vlCars[i];
    }
    else {
      xCars[i] += vlCars[i];
    }
  }
}

function voltaPosCarro(){
  for(let i = 0; i < xCars.length; i++) {
    if (i <= 2){
      if(passouTelaEsq(xCars[i]))
      xCars[i] = 610
    }
    else {
      if(passouTelaDir(xCars[i]))
      xCars[i] = -50
    }
  } 
}

function passouTelaEsq(xCars) {
  return xCars <= -50
}

function passouTelaDir(xCars) {
  return xCars >= 610
}