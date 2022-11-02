//personagens
xPersos = [100, 460]
yPersos = [365, 365]
pontos = [0,0]

//definições de personagens
largPerso = 30;
altPerso = 30;

function mostrarPerson(img, xPerso, yPerso) {
  for(let i = 0; i < imgPersons.length; i++) {
    image(imgPersons[i], xPersos[i], yPersos[i], largPerso, altPerso);
  }
}

function movPerson1() {
  if (keyIsDown(87)) {
    yPersos[0] -= 3;
  }
  if (keyIsDown(83)) {
    yPersos[0] += 3;
  }
  if (yPersos[0] >= 365) {
    voltInc(0);
  }
}

function movPerson2() {
  if (keyIsDown(UP_ARROW)) {
    yPersos[1] -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yPersos[1] += 3;
  }
  if (yPersos[1] >= 365) {
    voltInc(1)
  }
}

function atropelado() {
  for(let i = 0; i < imgPersons.length; i++) {
    for(let j = 0; j < imgCarros.length; j++) {
      for(let k = 0; k <= largPerso; k++) {
        for(let l = 0; l <= altPerso; l++) {
          if ((xPersos[i] + k >= xCars[j]  && xPersos[i] + k <= xCars[j] + largCar && yPersos[i] + l >= yCars[j] && yPersos[i] + l <= yCars[j] + altCar)){
            voltInc(i);
            perderPonto(i);
            if(i == 0) {
              vaca.play(); 
            } else {
              galinhaMusic.play(); 
            }
          }
        }
      }
    }
  }
}

function voltInc(i) {
  yPersos[i] = 365;
}

function pontuando() {
  for(let i = 0; i < imgPersons.length; i++) {
    if(yPersos[i] <= 2) {
      pontos[i] += 1;
      voltInc(i)
      pontosMusic.play();
    }
  }
}

function incluirPontos() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 8, 40, 20);
  fill(255);
  text(pontos[0], 170, 23);
  fill(color(255, 140, 0));
  rect(400, 8, 40, 20);
  fill(255);
  text(pontos[1], 420, 23);
}

function perderPonto(i) {
  if(pontosMaior0(i)) {
    pontos[i] -= 1;
  }
}

function pontosMaior0(i) {
  return pontos[i] > 0
}