var gameData = {     //adds crucial variables
	wood: 0,           //with how many wood you start
	woodPerSecond: 1, //how many wood you gain per second
	woodPerClick: 1,   //how many wood you gain per click
	spawnWoodenEntCost: 10,  //cost of wooden ent
	woodenEntLevel: 0, //level of wooden ent
	spawnWoodenTreantCost: 50, //cost of wooden treant
	woodenTreantLevel: 0, //level of wooden treant
}

let spawnWoodenEntBtn = document.getElementById('spawnWoodenEntBtn');
let saveWoodBtn = document.getElementById('saveWoodBtn');
let spawnWoodenTreantBtn = document.getElementById('spawnWoodenTreantBtn');
let woodSaved = document.getElementById("woodSaved");

saveWoodBtn.addEventListener('click', saveWood);
spawnWoodenEntBtn.addEventListener('click', spawnWoodenEnt);
spawnWoodenTreantBtn.addEventListener('click', spawnWoodenTreant);

function changeWood(amount){
	gameData.wood += amount;
	woodSaved.innerText = gameData.wood + "Wood Saved";
}

function saveWood() {                           //main clicking function, gain wood
	changeWood( gameData.woodPerClick );
}

function woodGain() {
    let amount = gameData.woodenEntLevel + gameData.woodenTreantLevel*2;
    changeWood( amount );
}

function spawnWoodenEnt() {  //function for spawning ents
	if (gameData.wood < gameData.spawnWoodenEntCost)
		return;
	
	changeWood( -gameData.spawnWoodenEntCost ); //deducts the price of the ent from the players inv.
	gameData.spawnWoodenEntCost *= 2;//doubles the cost of the wooden ent
	gameData.woodenEntLevel += 1;//increases the level of the wooden ent by 1
	woodSaved.innerText = gameData.wood + " Wood Saved";//updates wood number in the html
	spawnWoodenEntBtn.innerText  = "Spawn a Wooden Ent (Currently Level " + gameData.woodenEntLevel + ") Cost: " + gameData.spawnWoodenEntCost + "Wood" //increases the cost and level of wooden ent
}
function spawnWoodenTreant() {  //function for spawning Treants
	if (gameData.wood < gameData.spawnWoodenTreantCost)
		return;

	changeWood( -gameData.spawnWoodenTreantCost ); //deducts the price of the ent from the players inv.
	gameData.spawnWoodenTreantCost *= 2;//doubles the cost of the wooden treant
	gameData.woodenTreantLevel += 1;//increases the level of the wooden treant by 1
	spawnWoodenTreantBtn.innerText  = "Spawn a Wooden Treant (Currently Level " + gameData.woodenTreantLevel + ") Cost: " + gameData.spawnWoodenTreantCost + "Wood" //increases the cost and level of wooden treant
}

var saveGameLoop = window.setInterval(function() { //saves game
	localStorage.setItem('woodSaverSave', JSON.stringify(gameData))
}, 15000)

var mainGameLoop = window.setInterval(function() { //ticks
	woodGain()
}, 1000)
