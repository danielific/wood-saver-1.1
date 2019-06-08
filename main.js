var gameData = {     //adds crucial variables
  wood: 0,           //with how many wood you start
  woodPerClick: 1,   //how many wood you gain per click
  spawnWoodenEntCost: 10,  //cost of wooden ent
  woodenEntLevel: 0,
}

function saveWood() {                           //main clicking function, gain wood
gameData.wood += gameData.woodPerClick          //adds wood per click to the total amount of wood
document.getElementById("woodSaved").innerHTML = gameData.wood + "Wood Saved" //changes the amount of wood in the HTML
}

function spawnWoodenEnt() {  //function for spawning ents
if (gameData.wood >= gameData.spawnWoodenEntCost) { //if player has more wood than sWEC, variable passes
gameData.wood -= gameData.spawnWoodenEntCost //deducts the price of the ent from the players inv.
gameData.spawnWoodenEntCost *= 2 //doubles the cost of the wooden ent
gameData.woodenEntLevel += 1 //increases the level of the wooden ent by 1
document.getElementById("woodSaved").innerHTML = gameData.wood + " Wood Saved" //updates wood number in the html
document.getElementbyId("spawnWoodenEnt").innerHTML = "Spawn a Wooden Ent (Currently Level " + gameData.woodenEntLevel + ") Cost: " + gameData.spawnWoodenEntCost + "Wood"
  }
}

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem('woodSaverSave', JSON.stringify(gameData))
}, 15000)

var mainGameLoop = window.setInterval(function() {
  saveWood()
}, 1000)