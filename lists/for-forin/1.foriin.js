const service = require('./service');

async function main() {
    try{
        const result = await service.obterPessoas('a');
        // console.log(result)
        const names = []

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