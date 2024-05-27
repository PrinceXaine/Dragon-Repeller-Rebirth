let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let CurrentArmor = 0;
let fighting = 0;
let monsterHealth = 0;
let MonsterDamage = 0;
let Weaponinventory = ["Stick"];
let Armorinventory = ["Worn Shirt"];
let maxhealth = 100;
let NewWeaponPrice = 75;
let NewArmorPrice = 60;
let RunChance = 0;
let deaths = 0;

var GainedXP
var GainedGold
var GainedHP
var goldlost

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const maxhealthtext = document.querySelector("#maxhealthtext");
const weaponText = document.querySelector("#weaponText");
const armorText = document.querySelector("#armorText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const deathText = document.querySelector("#deathText");
const weapons = [
    { name: 'Stick', power: 5 },
    { name: 'Dagger', power: 25 },
    { name: 'Claw hammer', power: 50 },
    { name: 'Staff', power: 100 },
    { name: 'Sword', power: 200 },
    { name: 'Spear', power: 300 },
    { name: 'Greatsword', power: 500} ,
    { name: 'Dragon Slayer', power: 2000 },
];
const armor = [
    { name: 'Worn Shirt', defense: 5 },
    { name: 'Leather Garb', defense: 20 },
    { name: 'Iron Plate', defense: 40 },
    { name: 'Steel Armor', defense: 60 },
    { name: 'Diamond Mail', defense: 80 },
    { name: 'Obsidian Plate', defense: 100 },
    { name: 'Adamantium Suit', defense: 200 },
    { name: 'Dragon Repeller', defense: 500 },
];

const monsters = [
    {
        name: "Slime",
        level: 5,
        health: 25
    },
    {
        name: "Wolf",
        level: 10,
        health: 100
    },
    {
        name: "Salamander",
        level: 15,
        health: 225
    },
    {
        name: "Goblin",
        level: 20,
        health: 400
    },
    {
        name: "Bandit",
        level: 25,
        health: 500
    },
    {
        name: "Basilisk",
        level: 30,
        health: 900
    },
    {
        name: "Banshee",
        level: 35,
        health: 1225
    },
    {
        name: "Harpy",
        level: 40,
        health: 1600
    },
    {
        name: "Ogre",
        level: 45,
        health: 2025
    },
    {
        name: "Troll",
        level: 50,
        health: 2500
    },
    {
        name: "Chimera",
        level: 55,
        health: 3600
    },
    {
        name: "Drake",
        level: 65,
        health: 4225
    },
    {
        name: "Dragon",
        level: 100,
        health: 10000
    }
    
]
const locations = [
    {
        // -- 0 -- //
        name: "town square",
        "button text": ["Go to Inn", "Go to Cave", "Go to Forest", "Go to Dungeon", "Fight Dragon"],
        "button functions": [goStore, goCave, goForest, goDungeon, fightDragon],
        text: "You are in the town square."
    },
    {
        // -- 1 -- //
        name: "Inn",
        "button text": ["Rest (40 Gold)", "Buy " + weapons[currentWeapon + 1].name + " (" + NewWeaponPrice + " gold)", "Buy " + armor[CurrentArmor + 1].name + " (" + NewArmorPrice + " gold)", "Buy Health (10 Gold)", "Go to town square"],
        "button functions": [Rest, buyWeapon, buyArmor, BuyHP, goTown],
        text: "You enter the store."
    },
    {
        // -- 2 -- //
        name: "Cave",
        "button text": ["Slime", "Wolf", "Salamander", "Goblin", "Return to Town"],
        "button functions": [fightSlime, fightWolf, fightSalamander, fightGoblin, goTown],
        text: "You enter the Cave. You see some monsters."
    },
    {
        // -- 3 -- //
        name: "Forest",
        "button text": ["Bandit", "Basilisk", "Banshee", "Harpy", "Go to town square"],
        "button functions": [fightBandit, fightBasilisk, fightBanshee, fightHarpy, goTown],
        text: "While walking through the forest, you find monsters."
    },
    {
        // -- 4 -- //
        name: "Dungeon",
        "button text": ["Ogre", "Troll", "Chimera", "Drake", "Go to town square"],
        "button functions": [fightOgre, fightTroll, fightChimera, fightDrake, goTown],
        text: "You delve into the dungeon. You feel the presence of dangerous monsters."
    },
    {
        // -- 5 -- //
        name: "kill monster",
        "button text": ["Go to Cave", "Go to Forest", "Go to Inn", "Go to town square", "-"],
        "button functions": [goCave, goForest, goStore, goTown, goTown],
        text: "You gain " + GainedXP + " experience points and find " + GainedGold + " gold"
    },
    {
        // -- 6 -- //
        name: "lose",
        "button text": ["TRY AGAIN?", "RESTART?", "-", "-", "-"],
        "button functions": [TryAgain, restart],
        text: "You died. ☠️ On death you lost " + goldlost + " gold."
    },
    {
        // -- 7 -- //
        name: "win",
        "button text": ["Coninue?", "Continue?", "REPLAY?", "-", "-"],
        "button functions": [ContinuePlaying, ContinuePlaying, restart],
        text: "You defeat the Dragon! YOU WIN THE GAME! 🎉"
    },
    {
        // -- 8 -- //
        name: "fight",
        "button text": ["Attack", "Dodge", "Run", "-", "-"],
        "button functions": [attack, dodge, Run],
        text: "You are fighting a monster."
    }
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = goForest;
button4.onclick = goDungeon;
button5.onclick = fightDragon;

function update(location) {
    monsterStats.style.display = "none";
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button4.innerText = location["button text"][3];
    button5.innerText = location["button text"][4];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    button4.onclick = location["button functions"][3];
    button5.onclick = location["button functions"][4];
    text.innerText = location.text;
}

function goTown() {
    update(locations[0]);
}

function goStore() {
    if (weapons[currentWeapon].power === 2000 && armor[CurrentArmor].defense === 500) {
        update({
            name: "Inn",
            "button text": ["Rest (40 Gold)", "Sold Out!", "Sold Out!", "Buy Health (10 Gold)", "Go to town square"],
            "button functions": [Rest, buyWeapon, buyArmor, BuyHP, goTown],
            text: "You enter the store.",
        });
    } else if (currentWeapon < weapons.length - 1 && armor[CurrentArmor].defense === 500) {
        NewWeaponPrice = 3 * weapons[currentWeapon + 1].power;
        update({
            name: "Inn",
            "button text": ["Rest (40 Gold)", "Buy " + weapons[currentWeapon + 1].name + " (" + NewWeaponPrice + " gold)", "Sold Out!", "Buy Health (10 Gold)", "Go to town square"],
            "button functions": [Rest, buyWeapon, buyArmor, BuyHP, goTown],
            text: "Weapons Owned: " + Weaponinventory.join(", "),
        });
    } else if (weapons[currentWeapon].power === 2000 && CurrentArmor < armor.length - 1) {
        NewArmorPrice = 3 * armor[CurrentArmor + 1].defense;
        update({
            name: "Inn",
            "button text": ["Rest (40 Gold)", "Sold Out!", "Buy " + armor[CurrentArmor + 1].name + " (" + NewArmorPrice + " gold)", "Buy Health (10 Gold)", "Go to town square"],
            "button functions": [Rest, buyWeapon, buyArmor, BuyHP, goTown],
            text: "Weapons Owned: " + Weaponinventory.join(", "),
        });
    } else if (currentWeapon < weapons.length - 1 && CurrentArmor < armor.length - 1) {
        NewWeaponPrice = 3 * weapons[currentWeapon + 1].power;
        NewArmorPrice = 3 * armor[CurrentArmor + 1].defense;
        update({
            name: "Inn",
            "button text": ["Rest (40 Gold)", "Buy " + weapons[currentWeapon + 1].name + " (" + NewWeaponPrice + " gold)", "Buy " + armor[CurrentArmor + 1].name + " (" + NewArmorPrice + " gold)", "Buy Health (10 Gold)", "Go to town square"],
            "button functions": [Rest, buyWeapon, buyArmor, BuyHP, goTown],
            text: "Weapons Owned: " + Weaponinventory.join(", "),
        });
    }
    }

function goCave() {
    update(locations[2]);
}

function goForest() {
    update(locations[3])
}

function goDungeon(){
    update(locations[4])
}

function Rest() {
    if (health < maxhealth) {
    if (gold >= 40) {
        gold -= 40;
        health = maxhealth;
        goldText.innerText = gold;
        healthText.innerText = health + "/" + maxhealth;
    } else {
        text.innerText = "You do not have enough gold to rest.";
    }
    }
    else
    {
        text.innerText = "Your health is already at max.";
    }
}

function BuyHP() {
    if (health < maxhealth) {
    if (gold >= 10) {
        gold -= 10;
        health += 10
        if (health > maxhealth) {
            health = maxhealth;
        }
        goldText.innerText = gold;
        healthText.innerText = health + "/" + maxhealth;
    } else {
        text.innerText = "You do not have enough gold to buy health.";
    }
    }
    else
    {
        text.innerText = "Your health is already at max";
    }
}

function buyWeapon() {
    UpdatePrices()
    if (currentWeapon < weapons.length - 1) {
        const weaponPrice = 3 * weapons[currentWeapon + 1].power;
        if (gold >= weaponPrice) {
            gold -= weaponPrice;
            currentWeapon++;
            let newWeapon = weapons[currentWeapon].name;
            Weaponinventory.push(newWeapon);
            goldText.innerText = gold;
            text.innerText = "You put your old weapon in your pack, and are now wielding the " + newWeapon + ".";
            weaponText.innerText = weapons[currentWeapon].name;
            if (currentWeapon < weapons.length - 1) {
            NewWeaponPrice = 3 * weapons[currentWeapon + 1].power;
            }
        } else {
            if (currentWeapon < weapons.length - 1) {
            text.innerText = "You do not have enough gold to buy a " + weapons[currentWeapon + 1].name + ".";
            }
        }
} else {
    UpdatePrices();
    text.innerText = "You already have the best weapon!";
}
UpdatePrices();
}

function buyArmor() {
    UpdatePrices()
    if (CurrentArmor < armor.length - 1) {
        const armorPrice = 3 * armor[CurrentArmor + 1].defense;
        if (gold >= armorPrice) {
            gold -= armorPrice;
            CurrentArmor++;
            let newArmor = armor[CurrentArmor].name;
            Armorinventory.push(newArmor);
            goldText.innerText = gold;
            text.innerText = "You unequip your dusty old armor and equip " + newArmor + ".";
            armorText.innerText = armor[CurrentArmor].name;
            if (CurrentArmor < armor.length - 1) {
            NewArmorPrice = 3 * armor[CurrentArmor + 1].defense;
            }
        } else {
            if (CurrentArmor < armor.length - 1) {
            text.innerText = "You do not have enough gold to buy a " + armor[CurrentArmor + 1].name + ".";
            }
        }
    } else {
        UpdatePrices();
        text.innerText = "You already have the best armor!";
    }
    UpdatePrices();
}

function UpdatePrices() {
    if (weapons[currentWeapon].power === 2000 && armor[CurrentArmor].defense === 500) {
        update({
            name: "Inn",
            "button text": ["Rest (40 Gold)", "Sold Out!", "Sold Out!", "Buy Health (10 Gold)", "Go to town square"],
            "button functions": [Rest, buyWeapon, buyArmor, BuyHP, goTown],
            text: "Weapons Owned: " + Weaponinventory.join(", "),
        });
    } else if (currentWeapon < weapons.length - 1 && armor[CurrentArmor].defense === 500) {
        update({
            name: "Inn",
            "button text": ["Rest (40 Gold)", "Buy " + weapons[currentWeapon + 1].name + " (" + NewWeaponPrice + " gold)", "Sold Out!", "Buy Health (10 Gold)", "Go to town square"],
            "button functions": [Rest, buyWeapon, buyArmor, BuyHP, goTown],
            text: "Weapons Owned: " + Weaponinventory.join(", "),
        });
    } else if (weapons[currentWeapon].power === 2000 && CurrentArmor < armor.length - 1) {
        update({
            name: "Inn",
            "button text": ["Rest (40 Gold)", "Sold Out!", "Buy " + armor[CurrentArmor + 1].name + " (" + NewArmorPrice + " gold)", "Buy Health (10 Gold)", "Go to town square"],
            "button functions": [Rest, buyWeapon, buyArmor, BuyHP, goTown],
            text: "Weapons Owned: " + Weaponinventory.join(", "),
        });
    } else if (currentWeapon < weapons.length - 1 && CurrentArmor < armor.length - 1) {
        update({
            name: "Inn",
            "button text": ["Rest (40 Gold)", "Buy " + weapons[currentWeapon + 1].name + " (" + NewWeaponPrice + " gold)", "Buy " + armor[CurrentArmor + 1].name + " (" + NewArmorPrice + " gold)", "Buy Health (10 Gold)", "Go to town square"],
            "button functions": [Rest, buyWeapon, buyArmor, BuyHP, goTown],
            text: "Weapons Owned: " + Weaponinventory.join(", "),
        });
    }
    }

function fightSlime() {
    fighting = 0;
    goFight();
}

function fightWolf() {
    fighting = 1;
    goFight();
}

function fightSalamander() {
    fighting = 2;
    goFight();
}

function fightGoblin() {
    fighting = 3;
    goFight();
}

function fightBandit() {
    fighting = 4;
    goFight();
}

function fightBasilisk() {
    fighting = 5;
    goFight();
}

function fightBanshee() {
    fighting = 6;
    goFight();
}

function fightHarpy() {
    fighting = 7;
    goFight();
}

function fightOgre() {
    fighting = 8;
    goFight();
}

function fightTroll() {
    fighting = 9;
    goFight();
}

function fightChimera() {
    fighting = 10;
    goFight();
}

function fightDrake() {
    fighting = 11;
    goFight();
}

function fightDragon() {
    fighting = 12;
    goFight();
}

function goFight() {
    update(locations[8]);
    monsterHealth = monsters[fighting].health + Math.floor(Math.random() * xp/10);
    monsterStats.style.display = "block";
    monsterName.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealth;
}

function attack() {
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    MonsterDamage = getMonsterAttackValue(Math.floor(Math.random() * monsters[fighting].level - (xp/20)) + monsters[fighting].level - armor[CurrentArmor].defense) + Math.floor(monsters[fighting].level);
    health -= MonsterDamage;
    text.innerText = "The " + monsters[fighting].name + " attacks! The " + monsters[fighting].name + " deals " + MonsterDamage + " damage.";
    text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
    if (isMonsterHit()) {
        damage = weapons[currentWeapon].power + Math.floor(Math.random() + xp/10) + 1;
        monsterHealth -= damage
        text.innerText += " You deal " + damage + " damage."
    } else {
        text.innerText += " You miss.";
    }
    healthText.innerText = health + "/" + maxhealth;
    monsterHealthText.innerText = monsterHealth;
    if (health <= 0) {
        health = 0
        healthText.innerText = health + "/" + maxhealth
        lose();
    } else if (monsterHealth <= 0) {
        fighting === 11 ? winGame() : defeatMonster();
    }

    //weapon break chance at * 300
    if (monsters[fighting].level * 300 > xp){
        if (Math.random() <= 0.0125 && Weaponinventory.length !== 1) {
            const largeRedText = document.createElement('span');
            largeRedText.style.color = 'red';
            largeRedText.style.fontSize = '20px';
            largeRedText.textContent = "Your " + Weaponinventory.pop() + " breaks.";
            text.insertBefore(document.createElement('br'), text.firstChild);
            text.insertBefore(largeRedText, text.firstChild);
            currentWeapon--;
            weaponText.innerText = weapons[currentWeapon].name;
            NewWeaponPrice = 3 * weapons[currentWeapon + 1].power;
        }
        endofweaponbreak();
        }

    //weapon break chance at * 200
    if (monsters[fighting].level * 200 > xp){
        if (Math.random() <= 0.00625 && Weaponinventory.length !== 1) {
            const largeRedText = document.createElement('span');
            largeRedText.style.color = 'red';
            largeRedText.style.fontSize = '20px';
            largeRedText.textContent = "Your " + Weaponinventory.pop() + " breaks.";
            text.insertBefore(document.createElement('br'), text.firstChild);
            text.insertBefore(largeRedText, text.firstChild);
            currentWeapon--;
            weaponText.innerText = weapons[currentWeapon].name;
            NewWeaponPrice = 3 * weapons[currentWeapon + 1].power;
        }
        endofweaponbreak();
        }

    //weapon break chance at * 100
    if (monsters[fighting].level * 100 > xp){
        if (Math.random() <= 0.0125 && Weaponinventory.length !== 1) {
            const largeRedText = document.createElement('span');
            largeRedText.style.color = 'red';
            largeRedText.style.fontSize = '20px';
            largeRedText.textContent = "Your " + Weaponinventory.pop() + " breaks.";
            text.insertBefore(document.createElement('br'), text.firstChild);
            text.insertBefore(largeRedText, text.firstChild);
            currentWeapon--;
            weaponText.innerText = weapons[currentWeapon].name;
            NewWeaponPrice = 3 * weapons[currentWeapon + 1].power;
        }
        endofweaponbreak();
        }

    //weapon break chance at * 50
    if (monsters[fighting].level * 50 > xp){
    if (Math.random() <= 0.025 && Weaponinventory.length !== 1) {
        const largeRedText = document.createElement('span');
        largeRedText.style.color = 'red';
        largeRedText.style.fontSize = '20px';
        largeRedText.textContent = "Your " + Weaponinventory.pop() + " breaks.";
        text.insertBefore(document.createElement('br'), text.firstChild);
        text.insertBefore(largeRedText, text.firstChild);
        currentWeapon--;
        weaponText.innerText = weapons[currentWeapon].name;
        NewWeaponPrice = 3 * weapons[currentWeapon + 1].power;
    }
    endofweaponbreak();
    }
}

function endofweaponbreak()
{
    //This just serves as a way to escape from the break chance when the player's level exceeds the amount.
}

function getMonsterAttackValue(level) {
    const hit = (level * 5) - (Math.floor(Math.random() * xp));
    console.log(hit);
    return hit > 0 ? hit : 0;
}

function isMonsterHit() {
    return Math.random() > .2 || health < 20;
}

function dodge() {
    text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}

function defeatMonster() {
    TempGold = gold;
    Tempxp = xp;
    TempHP = maxhealth;

    // Calculate Gold given
    if (xp <= (monsters[fighting].level * 50))
        {
            gold += Math.floor(monsters[fighting].level + Math.random() * 5.0);
            endofgoldcalculations();
        }
    if (xp <= (monsters[fighting].level * 100))
        {
            gold += Math.floor(monsters[fighting].level + Math.random() * 4.0);
            endofgoldcalculations();
        }
    if (xp <= (monsters[fighting].level * 200))
        {
            gold += Math.floor(monsters[fighting].level + Math.random() * 3.0);
            endofgoldcalculations();
        }
    if (xp <= (monsters[fighting].level * 300))
        {
            gold += Math.floor(monsters[fighting].level + Math.random() * 2.0);
            endofgoldcalculations();
        }
    if (xp > (monsters[fighting].level * 300))
        {
            gold += Math.floor(monsters[fighting].level + Math.random());
            endofgoldcalculations();
        }
        
        function endofgoldcalculations()
        {
            //This just serves as a way to escape from the gold calculations
        }
    
    //Calculate XP given
    if (xp <= (monsters[fighting].level * 50))
        {   
            xp += Math.floor(monsters[fighting].level * 1.3);
            endofxpcalculations();
        }
    if (xp <= (monsters[fighting].level * 100))
        {   
            xp += Math.floor(monsters[fighting].level * 1.1);
            endofxpcalculations();
        }
    if (xp <= (monsters[fighting].level * 200))
        {   
            xp += Math.floor(monsters[fighting].level * 0.9);
            endofxpcalculations();
        }
    if (xp <= (monsters[fighting].level * 300))
        {   
            xp += Math.floor(monsters[fighting].level * 0.7);
            endofxpcalculations();
        }
    if (xp > (monsters[fighting].level * 300))
        {   
            xp += Math.floor(monsters[fighting].level * 0.5);
            endofxpcalculations();
        }

        function endofxpcalculations()
        {
            //This just serves as a way to escape from the break chance when the player's level exceeds the amount.
        }
    maxhealth = 100 + (Math.round(1 + xp * 0.025));
    GainedGold = Math.floor(gold - TempGold);
    GainedXP = Math.floor(xp - Tempxp);
    GainedHP = Math.floor(maxhealth - TempHP);
    goldText.innerText = gold;
    xpText.innerText = xp;
    update(locations[5]);
    update({
        name: "kill monster",
        "button text": ["Go to Cave", "Go to Forest", "Go to Inn", "Go to town square", "-"],
        "button functions": [goCave, goForest, goStore, goTown],
        text: "You gain " + GainedXP + " experience points and find " + GainedGold + " gold coins.\n\nYour maximum HP has increased by " + GainedHP + " points, placing your Maximum HP at " + maxhealth + "."
    });
    treasurechance = Math.random()
    if (treasurechance < 0.01) {
        TreasureChest();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function Run() {
    const RunChance = Math.floor(Math.random() * 100) + 1;

    if (RunChance >= 90) { 
        text.innerText = "You escaped.";
        goTown();
    } else {
        health -= getMonsterAttackValue(Math.round(Math.random() * 5 + monsters[fighting].level - (xp/100))) + (Math.round(Math.random() * 3 + 5));
        MonsterDamage = getMonsterAttackValue(Math.round(Math.random() * 5 + monsters[fighting].level - (xp/100))) + (Math.round(Math.random() * 3 + 5));
        text.innerText = "You failed to escape. The " + monsters[fighting].name + " attacks and deals " + MonsterDamage + " damage.";
        healthText.innerText = health + "/" + maxhealth;
        if (health <= 0) {
            health = 0
            healthText.innerText = health + "/" + maxhealth
            lose(); 
        }
    };
}

function lose() {
    TempGold = gold
    gold -= Math.floor(Math.random() * monsters[fighting].level * 2 + 5);
    goldlost = TempGold - gold;
    if (gold < 0){
        gold = 0;
    }
    goldText.innerText = gold;
    update(locations[6]);
    update({
        name: "lose",
            "button text": ["Continue?", "Restart?", "-", "-", "-"],
            "button functions": [TryAgain, restart],
            text: "You died. ☠️ On death you lost " + goldlost + " gold."
        });
}

function winGame() {
    update(locations[7]);
}

function restart() {
    xp = 0;
    health = 100;
    maxhealth = 100
    gold = 50;
    currentWeapon = 0;
    CurrentArmor = 0;
    Weaponinventory = ["Stick"];
    Armorinventory = ["Worn Shirt"];
    weaponText.innerText = weapons[currentWeapon].name;
    goldText.innerText = gold;
    healthText.innerText = health + "/" + maxhealth;
    xpText.innerText = xp;
    maxhealth = 100;
    NewWeaponPrice = 3 * weapons[currentWeapon + 1].power;
    NewArmorPrice = 3 * weapons[currentWeapon + 1].defense;
    deaths = 0;
    deathText.innerText = deaths;
    goTown();
}

function TryAgain() {
    health = maxhealth;
    healthText.innerText = health + "/" + maxhealth;
    deaths = deaths + 1;
    deathText.innerText = deaths;
    goTown();
}

function ContinuePlaying() {
    health = maxhealth;
    healthText.innerText = health + "/" + maxhealth;
    goTown();
}


function TreasureChest() {
    TempGold = gold;
    lootchance = Math.random();
    if (lootchance > 0.01) {
        gold += Math.floor(Math.random() * monsters[fighting].level + xp);
        GainedGold = Math.floor(gold - TempGold);
        goldText.innerText = gold;
        text.innerText = "You found a treasure chest! The treasure chest contained " + GainedGold + " gold!";
    } else {
        if (currentWeapon < weapons.length - 1) {
            currentWeapon++;
            let newWeapon = weapons[currentWeapon].name;
            Weaponinventory.push(newWeapon);
            text.innerText = "You found a treasure chest! The treasure chest contained a " + newWeapon + "!";
            weaponText.innerText = weapons[currentWeapon].name;
        } else {
            gold += Math.floor(Math.random() * monsters[fighting].level + xp);
            GainedGold = Math.floor(gold - TempGold);
            goldText.innerText = gold;
            text.innerText = "The treasure chest contained additional gold!";
        }
    }
}
