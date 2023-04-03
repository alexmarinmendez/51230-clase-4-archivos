const fs = require('fs')

const filename = './file-callbacks.txt'

fs.writeFile(filename, 'Saludos desde Coder', error => {
    if (error) return console.log('Hubo un error :(')
    fs.appendFile(filename, '\nSaludos también desde backend', error => {
        if (error) return console.log('Hubo un error :(')
        fs.readFile(filename, 'utf-8', (error, contenido) => {
            if (error) return console.log('Hubo un error :(')
            console.log(contenido)
            fs.unlink(filename, error => {
                if (error) return console.log('Hubo un error :(')
                console.log('Archivo borrado')
            })
        })
    })
})