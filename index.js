const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);
function obterUsuario(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            return resolve({
                id:1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        },1000);
    })
} 
function obterTelefone(idUsuario){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            return resolve({
                telefone:'11912321',
                ddd:'11'
            })
        },2000);
    })
}
function obterEndereco(idUsuario, callback) {
    setTimeout(()=>{
        return callback(null, {
            rua: 'dos bobos',
            numero: 0
        })
    },2000);
}
// retornara uma promise
console.log(main())
async function main() {

    
    try {
        console.time('medida-proeemise');
        const usuario = await obterUsuario();
        // const telefone = await obterTelefone(usuario.id);
        // const endereco = await obterEnderecoAsync(usuario.id);
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ]);
        const endereco = resultado[1];
        const telefone = resultado[0];

        console.log(usuario.nome, telefone.ddd, telefone.telefone, endereco.rua, endereco.numero)
        console.timeEnd('medida-proeemise');
    }
    catch (error) {
        console.log('Deu RUIM', error);
    }
    
}

const usuarioPromise = obterUsuario();

// usuarioPromise
//     .then(usuario => {
//         return obterTelefone(usuario.id)
//         .then(result => {
//             return {
//                 usuario:{
//                     nome:usuario.nome,
//                     id:usuario.id
//                 },
//                 telefone: result
//             }
//         })
//     }).then(resultado => {
//         const endereco = obterEnderecoAsync(resultado.usuario.id);
//         return endereco.then((result) => {
//             return {
//                 usuario: resultado.usuario,
//                 telefone: resultado.telefone,
//                 endereco: result
//             }
//         });
//     })
//     .then(resultado => {
//         console.log('resultado', resultado)
//     })
//     .catch(error => {
//         console.error("DEU RUIM", error)
//     });