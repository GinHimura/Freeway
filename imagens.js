//Carregando imagens
var imgEstrada;
let imgPerson1;
let imgPerson2;
let imgCar1;
let imgCar2;
let imgCar3;

//Carregando sons

let trilha;
let pontos;
let galinha;
let vaca;

function preload(){
  imgEstrada = loadImage("img/estrada.png");
  imgPerson1 = loadImage("img/ator-1.png");
  imgPerson2 = loadImage("img/ator-2.png");
  imgPersons = [imgPerson1, imgPerson2]
  imgCar1 = loadImage("img/carro-1.png");
  imgCar2 = loadImage("img/carro-2.png");
  imgCar3 = loadImage("img/carro-3.png");
  imgCar4 = loadImage("img/carro-4.png");
  imgCar5 = loadImage("img/carro-5.png");
  imgCar6 = loadImage("img/carro-6.png");
  imgCarros = [imgCar1, imgCar2, imgCar3, imgCar4, imgCar5, imgCar6]
  trilha = loadSound("sons/trilha.mp3");
  pontosMusic = loadSound("sons/pontos.mp3");
  galinhaMusic = loadSound("sons/galinha.mp3");
  vaca = loadSound("sons/vaca.mp3");
}
