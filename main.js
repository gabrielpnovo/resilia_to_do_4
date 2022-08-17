import chalk from 'chalk'
import * as readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let historia = []
let listaHistorias =[]

console.log('Considerando o modelo de história de usuário abaixo,\n"Como ' + chalk.yellow('[usuario]') + ', quero ' + chalk.green('[desejo do usuário]') + ' para ' + chalk.blue('[objetivo do usuário]') + '"' + '\nResponda:\n')

function qtdHistorias() {
    return new Promise ((resolve,reject) => {
        rl.question('Qtas histórias quer criar? ', (answer) => {
            resolve(answer)
        })
    })
}

function getUsuario(nroHistoria) {
    return new Promise ((resolve,reject) => {
        rl.question('Qual o ' + chalk.yellow('[usuario]') + ' da historia ' + nroHistoria +'? ', (answer) => {
            resolve(answer)
        })
    })
}

function getDesejo(nroHistoria) {
    return new Promise ((resolve,reject) => {
        rl.question('Qual o ' + chalk.green('[desejo do usuario]') + ' da historia ' + nroHistoria +'? ', (answer) => {
            resolve(answer)
        })
    })
}

function getObjetivo(nroHistoria) {
    return new Promise ((resolve,reject) => {
        rl.question('Qual o ' + chalk.blue('[objetivo do usuário]') + ' da historia ' + nroHistoria +'? ', (answer) => {
            resolve(answer)
        })
    })
}

async function main () {
    await qtdHistorias().then(async answer =>{
        if (isNaN(answer) == false) {
            for(let i=0;i<answer;i++) {
                await getUsuario(i+1).then(answer =>{
                    // historia.push(answer)
                    historia[0] = answer
                })
            
                await getDesejo(i+1).then(answer =>{
                    // historia.push(answer)
                    historia[1] = answer
                })
            
                await getObjetivo(i+1).then(answer =>{
                    // historia.push(answer)
                    historia[2] = answer
                })
                console.log('')
                listaHistorias.push(historia.slice(0,3))
            }
        } else {
            console.log('Vc deve inserir um número!')
            rl.close()
        }
    })

    listaHistorias.forEach((elemento,index) => {
        console.log(`A ${index+1}ª história é:\nComo ${chalk.yellow(elemento[0].toUpperCase())}, quero ${chalk.green(elemento[1].toUpperCase())} para ${chalk.blue(elemento[2].toUpperCase())}.\n`)
    })
    rl.close()
}

main()

rl.on('close', function () {
    console.log('\n=====FIM=====');
    process.exit(0);
});