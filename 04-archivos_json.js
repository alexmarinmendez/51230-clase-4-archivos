const fs = require('fs')
const filename = './ejemplo.txt'
const cliente1 = {
    name: 'Alex',
    lastname: 'Marin',
    age: 45
}
const cliente2 = {
    name: 'Shakira',
    lastname: '',
    age: 44
}
const cliente3 = {
    name: 'Piqué',
    lastname: '',
    age: 35
}

fs.writeFileSync(filename, JSON.stringify(cliente1, null, '\t'))
fs.appendFileSync(filename, JSON.stringify(cliente2, null, '\t'))
fs.appendFileSync(filename, JSON.stringify(cliente3, null, '\t'))
