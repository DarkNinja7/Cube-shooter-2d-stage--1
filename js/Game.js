class Game {
  constructor() {}

  //refered the game state from database and selected  value to be displayed.
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  //updating a gamestate to a database.
  update(state){
    database.ref('/').update({
      gameState:state
    });
  }

  //changes from form to game state.
  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    shooter1=createSprite(width/2-50,height-100);
    shooter1.scale=0.07;

    shooter2=createSprite(width/2+100,height-100);
    shooter2.scale=0.07;

    shooters=[shooter1,shooter2];
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  //checking whether all players are defined.
  play() {
    this.handleElements();
    Player.getPlayersInfo();
    if(allPlayers!==undefined){
    drawSprites();
    }
  }
}
