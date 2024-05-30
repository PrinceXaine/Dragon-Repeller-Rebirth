let xp = 0;
let health = 100;
let mana = 10;
let maxmana = 10;
let gold = 50;
let currentWeapon = 0;
let CurrentArmor = 0;
let fighting = 0;
let monsterHealth = 0;
let MonsterDamage = 0;
let Weaponinventory = ["Stick"];
let Armorinventory = ["Weathered Tunic"];
let maxhealth = 100;
let NewWeaponPrice = 75;
let NewArmorPrice = 60;
let RunChance = 0;
let deaths = 0;
let storedmonsterhealth = 0;
let SpellUnlocked = 0;
let MonsterSlain = 0;
let SpentGold = 0;
let BrokenWeapons = 0;
let TreasureFound = 0;
let FleeTimes = 0;

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
const manaText = document.querySelector("#manaText");
const spellText = document.querySelector("#spellText");
const maxmanaText = document.querySelector("#maxmanaText");
const weaponText = document.querySelector("#weaponText");
const armorText = document.querySelector("#armorText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const deathText = document.querySelector("#deathText");
const monsterText = document.querySelector("#monsterText");
const goldSpentText = document.querySelector("#goldSpentText");
const weaponsBrokeText = document.querySelector("#weaponsBrokeText");
const treasureText = document.querySelector("#treasureText");
const fledText = document.querySelector("#fledText");


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
    { name: 'Weathered Tunic', defense: 5 },
    { name: 'Leather Garb', defense: 20 },
    { name: 'Iron Plate', defense: 40 },
    { name: 'Steel Armor', defense: 60 },
    { name: 'Diamond Mail', defense: 80 },
    { name: 'Obsidian Plate', defense: 100 },
    { name: 'Adamantium Suit', defense: 200 },
    { name: 'Dragon Repeller', defense: 500 },
];
const skills = [
    { name: 'Magic Bolt', manacost: 0, power: 0},
    { name: 'Healing', manacost: 0, power: 0 },
    { name: 'Teleport', manacost: 0, power: 0 },
    { name: 'Magic Bolt II', manacost: 0, power: 0},
    { name: 'Healing II', manacost: 0, power: 0 },
];

const monsters = [
    {
        name: "Slime",
        level: 3,
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
        text: "You enter the Cave. In the dim lighting you spot some monsters."
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
        "button functions": [goCave, goForest, goStore, goTown],
        text: "You gain " + GainedXP + " experience points and find " + GainedGold + " gold"
    },
    {
        // -- 6 -- //
        name: "lose",
        "button text": ["Continue?", "-", "-", "-", "Restart?"],
        "button functions": [TryAgain, , , , restart],
        text: "You died. ☠️ On death you lost " + goldlost + " gold."
    },
    {
        // -- 7 -- //
        name: "win",
        "button text": ["Coninue?", "-", "-", "-", "Replay?"],
        "button functions": [ContinuePlaying, , , , restart],
        text: "You defeat the Dragon! YOU WIN THE GAME! 🎉"
    },
    {
        // -- 8 -- //
        name: "fight",
        "button text": ["Attack", "Magic", "Dodge", "-", "Run"],
        "button functions": [attack, Magic, dodge , , Run],
        text: "You are fighting a monster."
    },
    {
        // -- 9 -- //
        name: "Magic",
        "button text": ["Magic Bolt", "Healing", "Teleport", "-", "Return"],
        "button functions": [MagicBolt, Healing, Teleport, , goFight],
        text: "Which Spell would you like to use?"
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
            text: "You enter the inn.",
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
    if (health < maxhealth || mana < maxmana){
        if (gold >= 40) {
            gold -= 40;
            health = maxhealth;
            mana = maxmana;
            goldText.innerText = gold;
            healthText.innerText = health + "/" + maxhealth;
            manaText.innerText = mana + "/" + maxmana;
            SpentGold += 40;
            goldSpentText.innerText = SpentGold;
        } else {
            text.innerText = "You do not have enough gold to rest.";
        }
    }
}

function BuyHP() {
    if (health < maxhealth) {
    if (gold >= 10) {
        gold -= 10;
        SpentGold += 10;
        goldSpentText.innerText = SpentGold;
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
        if (Math.random() < 0.50){
        text.innerText = "You are already in top condition.";
        } else {
            text.innerText = "Your health is already full.";
        }
    }
}

function buyWeapon() {
    UpdatePrices();
    if (currentWeapon < weapons.length - 1) {
        const weaponPrice = 3 * weapons[currentWeapon + 1].power;
        if (gold >= weaponPrice) {
            gold -= weaponPrice;
            SpentGold += weaponPrice;
            goldSpentText.innerText = SpentGold;
            currentWeapon++;
            let newWeapon = weapons[currentWeapon].name;
            Weaponinventory.push(newWeapon);
            goldText.innerText = gold;
            text.innerText = "You put your old weapon in your pack, and are now wielding the " + newWeapon + ".";
            weaponText.innerText = weapons[currentWeapon].name;
            if (currentWeapon < weapons.length - 1) {
            NewWeaponPrice = 3 * weapons[currentWeapon + 1].power;
            UpdatePrices();
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
}

function buyArmor() {
    UpdatePrices();
    if (CurrentArmor < armor.length - 1) {
        const armorPrice = 3 * armor[CurrentArmor + 1].defense;
        if (gold >= armorPrice) {
            gold -= armorPrice;
            SpentGold += armorPrice;
            goldSpentText.innerText = SpentGold;
            CurrentArmor++;
            let newArmor = armor[CurrentArmor].name;
            Armorinventory.push(newArmor);
            goldText.innerText = gold;
            text.innerText = "You unequip your dusty old armor and equip " + newArmor + ".";
            armorText.innerText = armor[CurrentArmor].name;
            if (CurrentArmor < armor.length - 1) {
            NewArmorPrice = 3 * armor[CurrentArmor + 1].defense;
            UpdatePrices();
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
    goFight()
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
    if (storedmonsterhealth > 0) {
        monsterHealth = storedmonsterhealth;
        monsterHealthText.innerText = monsterHealth;
        storedmonsterhealth = 0;
    }
}

function attack() {
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    MonsterDamage = getMonsterAttackValue(Math.floor(Math.random() * monsters[fighting].level - (xp/20)) + monsters[fighting].level) + Math.floor(monsters[fighting].level - armor[CurrentArmor].defense);
    if (MonsterDamage <= 0)
        {
            if (Math.random() < 0.25){
                text.innerText = "You block the " + monsters[fighting].name + " attack.";
                } else {
                    MonsterDamage = monsters[fighting].level
                    health -= MonsterDamage;
                    text.innerText = "The " + monsters[fighting].name + " attacks! The " + monsters[fighting].name + " deals " + MonsterDamage + " damage.";
                }
        } else {
    health -= MonsterDamage;
    text.innerText = "The " + monsters[fighting].name + " attacks! The " + monsters[fighting].name + " deals " + MonsterDamage + " damage.";
        }
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
    mana += Math.floor(Math.random() * 2 + maxmana * 0.10)
        if (mana > maxmana) {
            mana = maxmana;
        }
    manaText.innerText = mana + "/" + maxmana;
    if (health <= 0) {
        health = 0
        healthText.innerText = health + "/" + maxhealth
        lose();
    } else if (monsterHealth <= 0) {
        monsterHealth = 0
        monsterHealthText.innerText = monsterHealth;
        fighting === 12 ? winGame() : defeatMonster();
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
            BrokenWeapons++;
            weaponsBrokeText.innerText = BrokenWeapons;
        }
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
            BrokenWeapons++;
            weaponsBrokeText.innerText = BrokenWeapons;
        }
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
            BrokenWeapons++;
            weaponsBrokeText.innerText = BrokenWeapons;
        }
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
        BrokenWeapons++;
        weaponsBrokeText.innerText = BrokenWeapons;
    }
    }
}

function getMonsterAttackValue(level) {
    const hit = (level * 5) - (Math.floor(Math.random() * xp));
    return hit > 0 ? hit : 0;
}

function isMonsterHit() {
    return Math.random() > .20 ||  xp > monsterHealth;
}

function dodge() {
    const DodgeChance = Math.random();
    if (DodgeChance >= 0.75) {
    TempHP = health
    health += Math.floor(Math.random() * 2 + maxhealth * 0.1);
    if (health > maxhealth) {
        health = maxhealth;
    }
    const HealthRecovered = health - TempHP
    healthText.innerText = health + "/" + maxhealth;
    text.innerText = "You dodge the attack from the " + monsters[fighting].name + ". You restore " + HealthRecovered + " health.";
    } else {
        MonsterDamage = getMonsterAttackValue(Math.floor(Math.random() * monsters[fighting].level - (xp/20)) + monsters[fighting].level) + Math.floor(monsters[fighting].level - armor[CurrentArmor].defense);
        if (MonsterDamage <= 0)
            {
                if (Math.random() < 0.10){
                    text.innerText = "You block the " + monsters[fighting].name + " attack.";
                    } else {
                        MonsterDamage = monsters[fighting].level
                        health -= MonsterDamage;
                        text.innerText = "The " + monsters[fighting].name + " attacks! The " + monsters[fighting].name + " deals " + MonsterDamage + " damage.";
                    }
            } else {
    health -= MonsterDamage;
    text.innerText = "You failed to avoid the hit from the " + monsters[fighting].name + ". The " + monsters[fighting].name + " attacks! The " + monsters[fighting].name + " deals " + MonsterDamage + " damage.";
    healthText.innerText = health + "/" + maxhealth;
            }
    if (health <= 0) {
        health = 0;
        healthText.innerText = health + "/" + maxhealth;
        lose();
    }
    }
}

function defeatMonster() {
    TempGold = gold;
    Tempxp = xp;
    TempHP = maxhealth;
    storedmonsterhealth = 0;
    MonsterSlain++;
    monsterText.innerText = MonsterSlain;

    if (monsters[fighting].level * 50 >= xp)
        {
            if (fighting === 0 && gold > 100){
                    gold += Math.floor(Math.random() * 5)
                } else { gold += Math.floor(monsters[fighting].level + Math.random() * 5.0);
                }
            xp += Math.floor(monsters[fighting].level * 1.3);
        }
    if (monsters[fighting].level * 100 >= xp)
        {
            if (fighting === 0 && gold > 100){
                gold += Math.floor(Math.random() * 4)
            } else { gold += Math.floor(monsters[fighting].level + Math.random() * 4.0);
            }
            xp += Math.floor(monsters[fighting].level * 1.1);
        }
    if (monsters[fighting].level * 200 >= xp)
        {
            if (fighting === 0 && gold > 100){
                gold += Math.floor(Math.random() * 3)
            } else { gold += Math.floor(monsters[fighting].level + Math.random() * 3.0);
            }
            xp += Math.floor(monsters[fighting].level * 0.9);
        }
    if (monsters[fighting].level * 300 >= xp)
        {
            if (fighting === 0 && gold > 100){
                gold += Math.floor(Math.random() * 2)
            } else { gold += Math.floor(monsters[fighting].level + Math.random() * 2.0);
            }
            xp += Math.floor(monsters[fighting].level * 0.7);
        }
    if (monsters[fighting].level * 500 >= xp)
        {
            if (fighting === 0 && gold > 100){
                gold += Math.floor(Math.random() * 1)
            } else { gold += Math.floor(monsters[fighting].level + Math.random());
            }
            xp += Math.floor(monsters[fighting].level * 0.5);
        }

    maxhealth = 100 + (Math.round(1 + xp * 0.025));
    healthText.innerText = health + "/" + maxhealth
    GainedGold = Math.floor(gold - TempGold);
    GainedXP = Math.floor(xp - Tempxp);
    GainedHP = Math.floor(maxhealth - TempHP);
    goldText.innerText = gold;
    xpText.innerText = xp;
    update(locations[5]);
    update({
        name: "kill monster",
        "button text": ["Go to Cave", "Go to Forest", "Go to Dungeon", "Go to Inn", "Go to Town Square"],
        "button functions": [goCave, goForest, goDungeon, goStore, goTown],
        text: "You gain " + GainedXP + " experience points and find " + GainedGold + " gold coins.\n\nYour maximum HP has increased by " + GainedHP + " points, placing your Maximum HP at " + maxhealth + "."
    });
    LearnMagic();
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
        FleeTimes++
        fledText.innerText = FleeTimes;
        text.innerText = "You escaped.";
        goTown();
    } else {
        MonsterDamage = getMonsterAttackValue(Math.floor(Math.random() * monsters[fighting].level - (xp/20)) + monsters[fighting].level) + Math.floor(monsters[fighting].level - armor[CurrentArmor].defense);
        if (MonsterDamage <= 0)
            {
                if (Math.random() < 0.10){
                    text.innerText = "You block the " + monsters[fighting].name + " attack.";
                    } else {
                        MonsterDamage = monsters[fighting].level
                        health -= MonsterDamage;
                        text.innerText = "The " + monsters[fighting].name + " attacks! The " + monsters[fighting].name + " deals " + MonsterDamage + " damage.";
                    }
            } else {
                health -= MonsterDamage
        text.innerText = "You failed to escape. The " + monsters[fighting].name + " attacks and deals " + MonsterDamage + " damage.";
        healthText.innerText = health + "/" + maxhealth;
            }
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
            "button text": ["Continue?", "-", "-", "-", "Restart?"],
            "button functions": [TryAgain, , , , restart],
            text: "You died. ☠️ On death you lost " + goldlost + " gold."
        });
}

function winGame() {
    defeatMonster();
    update(locations[7]);
}

function restart() {
    xp = 0;
    health = 100;
    mana = 10;
    maxmana = 10;
    gold = 50;
    currentWeapon = 0;
    CurrentArmor = 0;
    fighting = 0;
    monsterHealth = 0;
    MonsterDamage = 0;
    Weaponinventory = ["Stick"];
    Armorinventory = ["Weathered Tunic"];
    maxhealth = 100;
    NewWeaponPrice = 75;
    NewArmorPrice = 60;
    RunChance = 0;
    deaths = 0;
    storedmonsterhealth = 0;
    SpellUnlocked = 0;
    MonsterSlain = 0;
    SpentGold = 0;
    BrokenWeapons = 0;
    TreasureFound = 0;
    FleeTimes = 0;
    weaponText.innerText = weapons[currentWeapon].name;
    goldText.innerText = gold;
    healthText.innerText = health + "/" + maxhealth;
    manaText.innerText = mana + "/" + maxmana;
    xpText.innerText = xp;
    deathText.innerText = deaths;
    monsterText.innerText = MonsterSlain;
    goldSpentText.innerText = SpentGold;
    weaponsBrokeText.innerText = BrokenWeapons;
    treasureText.innerText = TreasureFound;
    fledText.innerText = FleeTimes;
    spellText.innerText = "";
    NewWeaponPrice = 3 * weapons[currentWeapon + 1].power;
    NewArmorPrice = 3 * weapons[currentWeapon + 1].defense;
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
    mana = maxmana;
    healthText.innerText = health + "/" + maxhealth;
    manaText.innerText = mana + "/" + maxmana;
    goTown();
}


function TreasureChest() {
    TempGold = gold;
    lootchance = Math.random();
    TreasureFound++
    treasureText.innerText = TreasureFound ;
    if (lootchance > 0.01) {
        gold += Math.floor(Math.random() * monsters[fighting].level + xp/10);
        GainedGold = Math.floor(gold - TempGold);
        goldText.innerText = gold;
        const largeRedText = document.createElement('span');
        largeRedText.style.color = 'yellow';
        largeRedText.style.fontSize = '20px';
        largeRedText.textContent = "You found a treasure chest! The treasure chest contained " + GainedGold + " gold!";
        text.insertBefore(document.createElement('br'), text.firstChild);
        text.insertBefore(largeRedText, text.firstChild);
    } else {
        if (currentWeapon < weapons.length - 1) {
            currentWeapon++;
            let newWeapon = weapons[currentWeapon].name;
            Weaponinventory.push(newWeapon);
            const largeRedText = document.createElement('span');
            largeRedText.style.color = 'yellow';
            largeRedText.style.fontSize = '20px';
            largeRedText.textContent = "You found a treasure chest! The treasure chest contained " + NewWeapon + "!";
            text.insertBefore(document.createElement('br'), text.firstChild);
            text.insertBefore(largeRedText, text.firstChild);
            weaponText.innerText = weapons[currentWeapon].name;
        } else {
            gold += Math.floor(Math.random() * monsters[fighting].level + xp/5);
            GainedGold = Math.floor(gold - TempGold);
            goldText.innerText = gold;
            const largeRedText = document.createElement('span');
            largeRedText.style.color = 'yellow';
            largeRedText.style.fontSize = '20px';
            largeRedText.textContent = "You found a treasure chest! The treasure chest contained " + GainedGold + " gold!";
            text.insertBefore(document.createElement('br'), text.firstChild);
            text.insertBefore(largeRedText, text.firstChild);
        }
    }
}

function LearnMagic(){
    if (Math.random() < 0.01) {
        SpellUnlocked++;
        if(SpellUnlocked > 6){
        SpellUnlocked = 6;
        maxmana += Math.floor(Math.random() * 2 + xp/100);
        manaText.innerText = mana + "/" + maxmana;
        }
        if (SpellUnlocked === 1){
        const largeRedText = document.createElement('span');
        largeRedText.style.color = 'Green';
        largeRedText.style.fontSize = '20px';
        largeRedText.textContent = "You feel magic course through your veins...you've learned Magic Bolt!";
        spellText.innerText = "Magic Bolt";
        text.insertBefore(document.createElement('br'), text.firstChild);
        text.insertBefore(largeRedText, text.firstChild);
        } else if (SpellUnlocked === 2){
            const largeRedText = document.createElement('span');
            largeRedText.style.color = 'Green';
            largeRedText.style.fontSize = '20px';
            largeRedText.textContent = "You feel magic course through your veins...you've learned Healing!";
            spellText.innerText = "Magic Bolt, Healing";
            text.insertBefore(document.createElement('br'), text.firstChild);
            text.insertBefore(largeRedText, text.firstChild);
            } else if (SpellUnlocked === 3){
        const largeRedText = document.createElement('span');
        largeRedText.style.color = 'Green';
        largeRedText.style.fontSize = '20px';
        largeRedText.textContent = "You feel magic course through your veins...you've learned Teleport!";
        spellText.innerText = "Magic Bolt, Healing, Teleport";
        text.insertBefore(document.createElement('br'), text.firstChild);
        text.insertBefore(largeRedText, text.firstChild);
        } else if (SpellUnlocked === 4){
            const largeRedText = document.createElement('span');
            largeRedText.style.color = 'Green';
            largeRedText.style.fontSize = '20px';
            largeRedText.textContent = "You feel magic course through your veins...you've learned Magic Bolt II!";
            spellText.innerText = "Magic Bolt II, Healing, Teleport";
            text.insertBefore(document.createElement('br'), text.firstChild);
            text.insertBefore(largeRedText, text.firstChild);
            } else if (SpellUnlocked === 5){
                const largeRedText = document.createElement('span');
                largeRedText.style.color = 'Green';
                largeRedText.style.fontSize = '20px';
                largeRedText.textContent = "You feel magic course through your veins...you've learned Healing II!";
                spellText.innerText = "Magic Bolt II, Healing II, Teleport";
                text.insertBefore(document.createElement('br'), text.firstChild);
                text.insertBefore(largeRedText, text.firstChild);
                }
                else if (SpellUnlocked === 6){
                    const largeRedText = document.createElement('span');
                    largeRedText.style.color = 'Green';
                    largeRedText.style.fontSize = '20px';
                    largeRedText.textContent = "You feel magic course through your veins...your maximum MP increased!";
                    text.insertBefore(document.createElement('br'), text.firstChild);
                    text.insertBefore(largeRedText, text.firstChild);
                    }
    }
}

function Magic() {
    storedmonsterhealth = monsterHealth

    if (SpellUnlocked === 0){
        update({
            name: "fight",
            "button text": ["-", "-", "-", "-", "Return"],
            "button functions": [, , , , goFight],
            text: "You haven't unlocked any spells yet."
        });
    } else if (SpellUnlocked === 1){
        update({
            name: "fight",
            "button text": ["Magic Bolt", "-", "-", "-", "Return"],
            "button functions": [MagicBolt, , , , goFight],
            text: "Magic Bolt: Deal damage to a monster."
        });
    } else if (SpellUnlocked === 2){
        update({
            name: "fight",
            "button text": ["Magic Bolt", "Healing", "-", "-", "Return"],
            "button functions": [MagicBolt, Healing, , , goFight],
            text: "Magic Bolt: Deal damage to a monster. Healing: Heal a small percentage of your health."
        });
    } else if (SpellUnlocked === 3){
        update({
            name: "fight",
            "button text": ["Magic Bolt", "Healing", "Teleport", "-", "Return"],
            "button functions": [MagicBolt, Healing, Teleport, , goFight],
            text: "Magic Bolt: Deal damage to a monster. Healing: Heal a small percentage of your health. Teleport: Return to town."
        });
    } else if (SpellUnlocked === 4){
        update({
            name: "fight",
            "button text": ["Magic Bolt II", "Healing", "Teleport", "-", "Return"],
            "button functions": [MagicBoltII, Healing, Teleport, , goFight],
            text: "Magic Bolt II: A powerful spell that deals massive damage to a monster. Healing: Heal a small percentage of your health. Teleport: Return to town."
        });
    } else if (SpellUnlocked === 5){
        update({
            name: "fight",
            "button text": ["Magic Bolt II", "Healing II", "Teleport", "-", "Return"],
            "button functions": [MagicBoltII, HealingII, Teleport, , goFight],
            text: "Magic Bolt II: A powerful spell that deals massive damage to a monster. Healing II: Heal a large percentage of your health. Teleport: Return to town."
        });
    } else if (SpellUnlocked === 6){
        update({
            name: "fight",
            "button text": ["Magic Bolt II", "Healing II", "Teleport", "-", "Return"],
            "button functions": [MagicBoltII, HealingII, Teleport, , goFight],
            text: "Magic Bolt: A powerful spell that deals massive damage to a monster. Healing II: Heal a large percentage of your health. Teleport: Return to town."
        });
    }
    
    monsterStats.style.display = "block";
    monsterName.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealth;
}

function MagicBolt() {
    if (mana < 10) {
        text.innerText = "You don't have enough mana to cast Magic Bolt!"
    } else {
        MonsterDamage = getMonsterAttackValue(Math.floor(Math.random() * monsters[fighting].level - (xp/20)) + monsters[fighting].level) + Math.floor(monsters[fighting].level - armor[CurrentArmor].defense);
    if (MonsterDamage <= 0)
        {
            if (Math.random() < 0.10){
                text.innerText = "You block the " + monsters[fighting].name + " attack.";
                } else {
                    MonsterDamage = monsters[fighting].level
                    health -= MonsterDamage;
                    text.innerText = "The " + monsters[fighting].name + " attacks! The " + monsters[fighting].name + " deals " + MonsterDamage + " damage.";
                }
        } else {
    health -= MonsterDamage;
    text.innerText = "The " + monsters[fighting].name + " attacks! The " + monsters[fighting].name + " deals " + MonsterDamage + " damage.";
        }
    text.innerText = "You cast Magic Bolt!"
    mana -= 10;
    manaText.innerText = mana + "/" + maxmana;
    damage = skills[0].power + Math.floor(Math.random() * skills[0].power + xp/10) + 1;
    monsterHealth -= damage
    text.innerText += " You deal " + damage + " damage."
    healthText.innerText = health + "/" + maxhealth;
    monsterHealthText.innerText = monsterHealth;
    if (health <= 0) {
        health = 0
        healthText.innerText = health + "/" + maxhealth
        lose();
    }
    if (monsterHealth <= 0) {
        fighting === 12 ? winGame() : defeatMonster();
        if (Math.random() < 0.10){
            maxmana += Math.floor(Math.random() * 2 + damage/100);
            }
            manaText.innerText = mana + "/" + maxmana;
    }
    }
    storedmonsterhealth = monsterHealth
}

function MagicBoltII() {
    if (mana < 10) {
        text.innerText = "You don't have enough mana to cast Magic Bolt!"
    } else {
        MonsterDamage = getMonsterAttackValue(Math.floor(Math.random() * monsters[fighting].level - (xp/20)) + monsters[fighting].level) + Math.floor(monsters[fighting].level - armor[CurrentArmor].defense);
    if (MonsterDamage <= 0)
        {
            if (Math.random() < 0.10){
                text.innerText = "You block the " + monsters[fighting].name + " attack.";
                } else {
                    MonsterDamage = monsters[fighting].level
                    health -= MonsterDamage;
                    text.innerText = "The " + monsters[fighting].name + " attacks! The " + monsters[fighting].name + " deals " + MonsterDamage + " damage.";
                }
        } else {
    health -= MonsterDamage;
    text.innerText = "The " + monsters[fighting].name + " attacks! The " + monsters[fighting].name + " deals " + MonsterDamage + " damage.";
        }
    text.innerText = "You cast Magic Bolt!"
    mana -= 10;
    manaText.innerText = mana + "/" + maxmana;
    damage = skills[0].power + Math.floor(Math.random() * skills[0].power + xp/5) + 1;
    monsterHealth -= damage
    text.innerText += " You deal " + damage + " damage."
    healthText.innerText = health + "/" + maxhealth;
    monsterHealthText.innerText = monsterHealth;
    if (health <= 0) {
        health = 0
        healthText.innerText = health + "/" + maxhealth
        lose();
    }
    if (monsterHealth <= 0) {
        fighting === 12 ? winGame() : defeatMonster();
        if (Math.random() < 0.10){
            maxmana += Math.floor(Math.random() * 2 + damage/100);
            }
            manaText.innerText = mana + "/" + maxmana;
    }
    }
    storedmonsterhealth = monsterHealth
}

function Healing() {
    if (mana < 10) {
        text.innerText = "You don't have enough mana to cast Healing!"
    } else {
        MonsterDamage = getMonsterAttackValue(Math.floor(Math.random() * monsters[fighting].level - (xp/20)) + monsters[fighting].level) + Math.floor(monsters[fighting].level - armor[CurrentArmor].defense);
        if (MonsterDamage <= 0)
            {
                if (Math.random() < 0.10){
                    text.innerText = "You block the " + monsters[fighting].name + " attack.";
                    } else {
                        MonsterDamage = monsters[fighting].level
                        health -= MonsterDamage;
                        text.innerText = "The " + monsters[fighting].name + " attacks! The " + monsters[fighting].name + " deals " + MonsterDamage + " damage.";
                    }
            } else {
        health -= MonsterDamage;
        text.innerText = "The " + monsters[fighting].name + " attacks! The " + monsters[fighting].name + " deals " + MonsterDamage + " damage.";
            }
    if (health <= 0) {
        health = 0;
        healthText.innerText = health + "/" + maxhealth;
        lose();
    } else {
    mana -= 10;
    tempHP = health;
    health += Math.floor(Math.random() * 5 + maxhealth * 0.10);
    if (health > maxhealth){
        health = maxhealth;
    }
    healthText.innerText = health + "/" + maxhealth;
    HealthRecovered = health - tempHP;
    if (Math.random() < 0.10){
    maxmana += Math.floor(Math.random() * 2 + HealthRecovered/5);
    }
    manaText.innerText = mana + "/" + maxmana;
    text.innerText = "You cast Healing! You recovered " + HealthRecovered + " health!";
    }}
}

function HealingII() {
    if (mana < 10) {
        text.innerText = "You don't have enough mana to cast Healing!"
    } else {
        MonsterDamage = getMonsterAttackValue(Math.floor(Math.random() * monsters[fighting].level - (xp/20)) + monsters[fighting].level) + Math.floor(monsters[fighting].level - armor[CurrentArmor].defense);
        if (MonsterDamage <= 0)
            {
                if (Math.random() < 0.10){
                    text.innerText = "You block the " + monsters[fighting].name + " attack.";
                    } else {
                        MonsterDamage = monsters[fighting].level
                        health -= MonsterDamage;
                        text.innerText = "The " + monsters[fighting].name + " attacks! The " + monsters[fighting].name + " deals " + MonsterDamage + " damage.";
                    }
            } else {
        health -= MonsterDamage;
        text.innerText = "The " + monsters[fighting].name + " attacks! The " + monsters[fighting].name + " deals " + MonsterDamage + " damage.";
            }
    if (health <= 0) {
        health = 0;
        healthText.innerText = health + "/" + maxhealth;
        lose();
    } else {
    mana -= 10;
    tempHP = health;
    health += Math.floor(Math.random() * 5 + maxhealth * 0.20);
    if (health > maxhealth){
        health = maxhealth;
    }
    healthText.innerText = health + "/" + maxhealth;
    HealthRecovered = health - tempHP;
    if (Math.random() < 0.10){
    maxmana += Math.floor(Math.random() * 2 + HealthRecovered/5);
    }
    manaText.innerText = mana + "/" + maxmana;
    text.innerText = "You cast Healing! You recovered " + HealthRecovered + " health!";
    }}
}

function Teleport() {
    if (mana < 10) {
        text.innerText = "You don't have enough mana to cast Teleport!"
    } else {
    goTown();
    FleeTimes++;
    fledText.innerText = FleeTimes;
    text.innerText = "You cast Teleport!";
    mana -= 10;
    manaText.innerText = mana + "/" + maxmana;
    storedmonsterhealth = 0;
    }
}