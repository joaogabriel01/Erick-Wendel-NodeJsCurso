const service = require('./service');

async function main() {
    try{
        const result = await service.obterPessoas('a');
        // console.log(result)
        const names = []

        console.time('forof');
        for(pessoa of result.results) {
            names.push(pessoa.name);
        }
        console.timeEnd('forof');




        console.log('Names',names)
    }
    catch(error) {
        console.log('error interno', error);
    }
}

main()