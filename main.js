
	var gameData = {     //adds crucial variables
	wood: 0,           //with how many wood you start
	woodPerSecond: 1, //how many wood you gain per second
	woodPerClick: 1,   //how many wood you gain per click
	spawnWoodenEntCost: 20,  //cost of wooden ent
	woodenEntLevel: 0, //level of wooden ent
	spawnWoodenTreantCost: 50, //cost of wooden treant
	woodenTreantLevel: 0, //level of wooden treant
	spawnNymphCost: 200,
	nymphLevel: 0, 
	upgradeSledCost: 10, //cost of sled
	sledLevel: 0, //level of the sled
}

let spawnNymphBtn = document.getElementById('spawnNymphBtn');    
let spawnWoodenEntBtn = document.getElementById('spawnWoodenEntBtn');
let saveWoodBtn = document.getElementById('saveWoodBtn');
let spawnWoodenTreantBtn = document.getElementById('spawnWoodenTreantBtn');
let woodSaved = document.getElementById("woodSaved");
let upgradeSledBtn = document.getElementById('upgradeSledBtn');

saveWoodBtn.addEventListener('click', saveWood);
spawnWoodenEntBtn.addEventListener('click', spawnWoodenEnt);
spawnWoodenTreantBtn.addEventListener('click', spawnWoodenTreant);
upgradeSledBtn.addEventListener('click', upgradeSled);

function changeWood(amount){
	gameData.wood += amount;
	woodSaved.innerText = gameData.wood + "Wood Saved";
}

function saveWood() {                           //main clicking function, gain wood
	changeWood( gameData.woodPerClick );
}

function woodGain() {                          //idle gains
    let amount = gameData.woodenEntLevel*1 + gameData.woodenTreantLevel*2 + gameData.nymphLevel*5
    changeWood( amount );
}

function upgradeSled() {                    //increases wood per click
    if (gameData.wood < gameData.upgradeSledCost)
	    return;
		
		changeWood( -gameData.upgradeSledCost ); //deducts the price of the upgrade from the players total wood.
	gameData.upgradeSledCost *= 2;//increases the cost of the upgrade
	gameData.woodPerClick += 1; //MAIN FUNCTION OF SLED, increase WOOD PER CLICK
	gameData.sledLevel += 1;//increases the level of the sled by 1
	woodSaved.innerText = gameData.wood + " Wood Saved";//updates wood number in the html
	upgradeSledBtn.innerText  = "Upgrade your wooden sled (Currently Level " + gameData.sledLevel + ") Cost: " + gameData.upgradeSledCost + "Wood" //increases the cost and level of the sled
}
	
function spawnWoodenEnt() {  //function for spawning ents
	if (gameData.wood < gameData.spawnWoodenEntCost)
		return;
	
	changeWood( -gameData.spawnWoodenEntCost ); //deducts the price of the ent from the players inv.
	gameData.spawnWoodenEntCost *= 1.14;//doubles the cost of the wooden ent
	gameData.woodenEntLevel += 1;//increases the level of the wooden ent by 1
	woodSaved.innerText = gameData.wood + " Wood Saved";//updates wood number in the html
	spawnWoodenEntBtn.innerText  = "Spawn a Wooden Ent (Currently Level " + gameData.woodenEntLevel + ") Cost: " + gameData.spawnWoodenEntCost + "Wood" //increases the cost and level of wooden ent
}

function spawnWoodenTreant() {  //function for spawning Treants
	if (gameData.wood < gameData.spawnWoodenTreantCost)
		return;

	changeWood( -gameData.spawnWoodenTreantCost ); //deducts the price of the ent from the players inv.
	gameData.spawnWoodenTreantCost *= 1.14;//doubles the cost of the wooden treant
	gameData.woodenTreantLevel += 1;//increases the level of the wooden treant by 1
	spawnWoodenTreantBtn.innerText  = "Spawn a Wooden Treant (Currently Level " + gameData.woodenTreantLevel + ") Cost: " + gameData.spawnWoodenTreantCost + "Wood" //increases the cost and level of wooden treant
}

function spawnNymph() {  //function for spawning Nymphs
	if (gameData.wood < gameData.spawnNymphCost)
		return;

	changeWood( -gameData.spawnWoodenTreantCost ); //deducts the price of the ent from the players inv.
	gameData.spawnNymphCost *= 1.14;//doubles the cost of the nypmh
	gameData.nymphLevel += 1;//increases the level of the nymph by 1
	spawnNymphBtn.innerText  = "Spawn a Nymph (Currently Level " + gameData.nymphLevel + ") Cost: " + gameData.spawnNymphCost + "Wood" //increases the cost and level of nymph
}

var saveGameLoop = window.setInterval(function() { //saves game
	localStorage.setItem('woodSaverSave', JSON.stringify(gameData))
}, 15000)

var mainGameLoop = window.setInterval(function() { //ticks
	woodGain()
}, 1000)
