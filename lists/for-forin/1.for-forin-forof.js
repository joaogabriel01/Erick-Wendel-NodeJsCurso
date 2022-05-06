const service = require('./service');

async function main() {
    try{
        const result = await service.obterPessoas('a');
        // console.log(result)
        const names = []

        console.time('for');
        for(let i = 0; i <= result.results.length - 1; i++){
            const pessoa = result.results[i];
            names.push(pessoa.name);
        }
        console.timeEnd('for');

        console.time('forof');
        for(pessoa of result.results) {
            names.push(pessoa.name);
        }
        console.timeEnd('forof');


        console.time('forin');
        for(let i in result.results) {
            const pessoa = result.results[i];
            names.push(pessoa.name)
        }
        console.timeEnd('forin');




        console.log('Names',names)
    }
    catch(error) {
        console.log('error interno', error);
    }
}

main()