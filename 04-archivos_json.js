const fs = require('fs')
const filename = './ejemplo.txt'
const cliente1 = {
    name: 'Alex',
    lastname: 'Marin',
    age: 45
}

fs.writeFileSync(filename, JSON.stringify(cliente1, null, '\t'))
const contenido = JSON.parse(fs.readFileSync(filename, 'utf-8'))
contenido.age = 35
fs.writeFileSync(filename, JSON.stringify(contenido, null, '\t'))

