const fs = require('fs')

const filename = './archivo_promesas.txt'

const operacionesAsync = async() => {
    await fs.promises.writeFile(filename, 'Saludos desde Coder!')

    // try {
    //     let contenido = await fs.promises.readFile('./otro_file.txt', 'utf-8')
    //     console.log(contenido)
    // } catch (err) {
    //     console.log(err)
    // }

    let contenido = await fs.promises.readFile(filename, 'utf-8')
    console.log(contenido)
    
    await fs.promises.appendFile(filename, '\nOtros saludos.')
    contenido = await fs.promises.readFile(filename, 'utf-8')
    console.log(contenido)
    
    await fs.promises.unlink(filename)
}

operacionesAsync()