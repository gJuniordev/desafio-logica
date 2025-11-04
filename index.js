let nome = "Kawagoru";
let experienciaNivel = 3500;
const msgHero = "O Herói de nome " + nome + " está no nível de: ";

if (experienciaNivel === " ") {
  console.log(msgHero + "Ferro");
} else if (experienciaNivel <= 0) {
  console.log("Digite um valor válido, por favor!!!");
} else if (experienciaNivel <= 1000) {
  console.log(msgHero + "Ferro");
} else if (experienciaNivel === 1001 || experienciaNivel <= 2000) {
  console.log(msgHero + "Bronze");
} else if (experienciaNivel === 2001 || experienciaNivel <= 5000) {
  console.log(msgHero + "Prata");
} else if (experienciaNivel === 5001 || experienciaNivel <= 7000) {
  console.log(msgHero + "Ouro");
} else if (experienciaNivel === 7001 || experienciaNivel <= 8000) {
  console.log(msgHero + "Platina");
} else if (experienciaNivel === 8001 || experienciaNivel <= 9000) {
  console.log(msgHero + "Ascendente");
} else if (experienciaNivel === 9001 || experienciaNivel <= 10000) {
  console.log(msgHero + "Imortal");
} else if (experienciaNivel >= 10001) {
  console.log(msgHero + "Radiante");
} else {
  console.log("Nenhuma das alternativas, poderia digitar novamente?");
}
