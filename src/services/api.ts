import axios from 'axios'

const api = axios.create({
    // se o server nao estiver online coloque o IP da sua maquina
    // digitar ipconfig no cmd
    // meu ip: 192.168.2.104
    baseURL: 'http://192.168.2.104:3333',
})

export {api}