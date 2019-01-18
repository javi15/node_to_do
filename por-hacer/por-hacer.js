const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    // return new Promise((resolve, reject) => {
    //     fs.writeFile('db/data.json',data,(err) => {
    //         if (err) reject(err);
    //             else
    //             resolve(`datos guardados con exito`);
    //     });
    // });

    fs.writeFile('db/data.json', data, (err) => {
        if(err) throw Error('Hey un ERROR', err);
    })
    
}


const cargar = () => {

    try {
         listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}


const getListado = () => {

    cargar();
    return listadoPorHacer;
}

const crear = (descripcion) => {

    cargar();
    let porHacer = {

        descripcion,
        completado : false

        
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}


const actulizar = (descripcion, completado = true) => {
    cargar();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

const borrarDB = (descripcion) => {

    cargar();
    let newList = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    })

    if(newList.length === listadoPorHacer){        
        
        return false;
    }else{
        listadoPorHacer = newList;
        guardarDB();
        return true;
    }
}

module.exports ={

    crear,
    getListado,
    actulizar,
    borrarDB
}