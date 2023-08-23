
let nomeJogador = "Wellington";

let quantidadeXP = 6001;
 
if(quantidadeXP <= 1000){
    console.log(`"O Herói de nome ${nomeJogador} está no nível de Ferro"`);
}else if(quantidadeXP > 1000 && quantidadeXP <=2000){
    console.log(`"O Herói de nome ${nomeJogador} está no nível de Bronze"`);
}else if(quantidadeXP > 2000 && quantidadeXP <=5000){
    console.log(`"O Herói de nome ${nomeJogador} está no nível de Prata"`);
}else if(quantidadeXP > 5000 && quantidadeXP <=6000){
    console.log(`"O Herói de nome ${nomeJogador} está no nível de Ouro"`);
}else if(quantidadeXP > 6000 && quantidadeXP <=7000){
    console.log(`"O Herói de nome ${nomeJogador} está no nível de Diamante"`);
}else if(quantidadeXP > 7000 && quantidadeXP <=8000){
    console.log(`"O Herói de nome ${nomeJogador} está no nível de Platina"`);
}else if(quantidadeXP > 8000 && quantidadeXP <=9000){
    console.log(`"O Herói de nome ${nomeJogador} está no nível de Ascendente"`);
}else if(quantidadeXP > 9000 && quantidadeXP <=10000){
    console.log(`"O Herói de nome ${nomeJogador} está no nível de Imortal"`);
}else{(quantidadeXP > 10000)
    console.log(`"O Herói de nome ${nomeJogador} está no nível de Radiante"`);
}