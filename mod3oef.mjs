// Begin van boilerplate dat je even mag vergeten
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { constants } from 'node:buffer';
const userInput = readline.createInterface({input, output});
// Einde van boilerplate dat je even mag vergeten
//h1

let hoogte = 5;

for(let i = 1; i<=hoogte; i++){
    let ster = '';
    for(let j = 1; j<=i; j++){
        ster += '*'; 
        for(let l = 1; l<=j; l++){
        }
    } 
    console.log(ster);
}

process.exit();

//m4
/*
for(let i=1; i<=100; i++){
    if(i %3 == 0 && i %5 == 0){
        console.log(`${i} fizzbuzz`);
    }else if(i %5 == 0){
        console.log(`${i} buzz`);
    }else if(i %3 == 0){
        console.log(`${i} fizz`);
    }else{
        console.log(`${i}`);
    }
}

process.exit();
*/

//m3
/*
let num = parseFloat(await userInput.question('geef mij getal: '));
if(num > 2){
    let i = 2;
    while(i < num){
        if(num %i == 0){
            console.log(`${num} is geen priem`);
            break;
        }else{
            console.log(`${num} is priem`);
            break;
        }
        i++;
    }
    
}else if(num == 2){
    console.log(`${num} is priem`);

}else{
    console.log(`${num} is geen priem`);
}
process.exit();
*/

//m2
/*
let hoogte = 4;

for(let i = 1; i<=hoogte; i++){
    let ster = '';
    for(let j = 1; j<=i; j++){
        ster += '*'; 
    }
    console.log(ster);
}

process.exit();
*/

//m1
/*
let som = 0;
let i;
do{
    i = parseFloat(await userInput.question('Geef mij getal: '));
    som += i
    
}while(i > 0){

}
console.log(som);

process.exit();
*/

//e2
/*
let getal = 5;
while(getal <= 5){
    console.log('De tafel van 5: ');
    let getal2 = 1;
    while(getal2 <= 10){
        let result = getal * getal2;
        console.log(`${getal} x ${getal2} = ${result}`);
        getal2++;
    }
    console.log("-----------------");
    getal++;
}
process.exit();
*/


//e1
/*
for(let i=1; i<=20; i++){
    if(i %2==0){
        console.log(`${i}`);
    }
}
process.exit();
*/
