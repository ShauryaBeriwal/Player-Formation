var canvas,backgroundImage;
var database;
var gameState = 0;
var playerCount,allPlayers;
var form,game,player;

function setup(){
    database = firebase.database();
    console.log(database);
    canvas = createCanvas(400,400);

    game = new Game();
    game.getState();
    game.start();
}

function draw(){

}

function writePosition(x,y){
     database.ref('ball/position').set({
         'x': position.x + x,
         'y': position.y + y
     })
}

function readPosition(data){
    position = data.val();
    
    hypnoticBall.x= position.x;
    hypnoticBall.y = position.y;
}

function showError(){
    console.log("Error writing to the database");
}