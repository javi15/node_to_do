const argv = require('yargs')
              .command('crear','Crea un elemento por hacer',
              {
                descripcion : {
                    alias : 'd',
                    demand : true
                }
              })
              .command('actualizar','Actuliza una tarea',{
                  descripcion : {
                      alias : 'd',
                      demand : true
                  },
                  compleatado : {
                      alias : 'c',
                      default : true
                  }
                }).command('borrar', 'Borra una tareas',{
                    descripcion : {
                        alias : 'd',
                        demand : true
                    }
                    // Estado : {
                    //     alias : 'c',
                    //     default : true
                    // }
                }).help().argv;


             
              module.exports ={
                argv
            }

