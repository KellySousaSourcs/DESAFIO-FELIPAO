//criar a variável de armazenar o nome e o XP

let nomeDeHeroi = "Thanus";
let nivelDoHeroi =  10.005;

// criar uma estrutura de decisão pro XP
if(nivelDoHeroi <= 1.000){

    console.log(`O XP do Herói ${nomeDeHeroi} é Ferro`);

}else if(nivelDoHeroi >= 1.001 && nivelDoHeroi <= 2.000){

    console.log(`O XP do Herói ${nomeDeHeroi} é Bronze`);

}else if(nivelDoHeroi >= 2.001 && nivelDoHeroi <= 5.000){

    console.log(`O XP do Herói ${nomeDeHeroi} é Prata`);

}else if(nivelDoHeroi >= 5.001 && nivelDoHeroi <= 6.000){

    console.log(`O XP do Herói ${nomeDeHeroi} é Ouro`);

}else if(nivelDoHeroi >= 7.001 && nivelDoHeroi <= 8.000){

    console.log(`O XP do Herói ${nomeDeHeroi} é Platina Diamante`);

}else if(nivelDoHeroi >= 8.001 && nivelDoHeroi <= 9.000){

    console.log(`O XP do Herói ${nomeDeHeroi} é Ascendente`);

}else if(nivelDoHeroi >= 9.001 && nivelDoHeroi <= 10.000){

    console.log(`O XP do Herói ${nomeDeHeroi} é Imortal`);

}else{

    console.log(`O XP do Herói ${nomeDeHeroi} é Radiante`);
}

console.log(`O Herói ${nomeDeHeroi} está no nível ${nivelDoHeroi}`);