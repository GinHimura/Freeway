function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(imgEstrada);
  mostrarPerson();
  mostrarCarros();
  movCarros();
  voltaPosCarro();
  movPerson1();
  movPerson2();
  atropelado();
  pontuando();
  incluirPontos();
}