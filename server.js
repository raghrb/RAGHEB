// Importation du module Express pour la création d'une application web
var app = require('express')();
// Création d'un serveur HTTP basé sur l'application Express
var http = require('http').Server(app);
// Initialisation de Socket.IO en attachant le serveur HTTP
var io = require('socket.io')(http);
// Configuration de la route principale ("/") pour renvoyer un fichier HTML
app.get("/", function(req, res){
res.sendFile(__dirname + '/index.html');})
// Gestion des connexions Socket.IO
io.on('connection', function(socket){
// Affichage dans la console lorsqu'un utilisateur se connecte
console.log('a user is connected');
// Gestion de la déconnexion d'un utilisateur
socket.on('disconnect', function (){
console.log('a user is disconnected');
})
// Écoute des événements "chat message" et émission à tous les clients connectés
socket.on('chat message', function (msg){
console.log('message recu : ' + msg);
io.emit('chat message', msg);
})
})
// Mise en écoute du serveur sur le port 3000
http.listen(3000, function(){
console.log("Server running on 3000")
})