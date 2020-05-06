/*
Configuration du server
*/
// Importer les composants
let express = require('express')
let path = require('path')
let bodyParser = require('body-parser')

require('events').EventEmitter.prototype._maxListeners = 100;

// Importer les fichiers de gestion des routes
let front = require('./routes/front')

// Définir le port
let port = 8080;

// Initier le serveur
let app = module.exports.app = express()

// Définir le dossier static de la partie front
app.set('views', path.join(__dirname, 'www'))
app.use(express.static(path.join(__dirname, 'www')))

// Configurer body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Définir les routes
app.use('/', front)
// 


/*
Configuration Socket.io
*/
// Ecouter le serveur
let server = app.listen(port)

// Importer le composant 'socket.io' et écouter le serveur
let io = require('socket.io').listen(server)

io.on('connection', (socket) => {
    console.log(`La connexion est établie.`);
})





var opn = require('opn');

// opens the url in the default browser 
opn('http://localhost:8080');
