const argv = require('./configure/yargs').argv;
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors');

let comando = argv._[0];

switch (comando){
    case 'crear':
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
    
    break;

    case 'listar':

    let listado = porHacer.getListado();
    
    for(let valor of listado){
    console.log('=====tarea======'.green)
    console.log('Descripcion :',valor.descripcion)
    console.log('Estado :', valor.completado )
    console.log('================'. green)
    }
    break;
    case 'actualizar':
    let actulizado = porHacer.actulizar(argv.descripcion, argv.completado)
    console.log(actulizado);
    break;
    case 'borrar':
    let borrar = porHacer.borrarDB(argv.descripcion);
    console.log(borrar);
    break;

    default :
    console.log('Comando no reconocido')
    break;
}