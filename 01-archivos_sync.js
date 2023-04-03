const fs = require('fs')    //FileSystem (fs)

const filename = './ejemplo2.txt'

fs.writeFileSync(filename, 'Buenas noches')

if (fs.existsSync(filename)) {
    const contenido = fs.readFileSync(filename, 'utf-8')
    console.log(contenido)

    fs.appendFileSync(filename, '\nBuenas\tnoches')

    fs.unlinkSync(filename) //delete the file!

} else {
    console.log('No existe el archivo!')
}