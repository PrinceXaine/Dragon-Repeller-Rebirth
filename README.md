# Play the Game Here:
[https://itch.io/embed-upload/10527186?color=333333](https://itch.io/embed-upload/10545641?color=333333)

![image](https://github.com/PrinceXaine/Dragon-Repeller-Rebirth/assets/96804005/26ff1fab-39aa-4369-8307-fe771d4cac9e)


The version I updated from:
![image](https://github.com/PrinceXaine/Dragon-Repeller-Rebirth/assets/96804005/39d7f7c9-5ee7-4529-9bf3-b1f4f1ca64a1)
https://github.com/samuelcardenasg23/role-playing-game


# Dragon Repeller Rebirth
This is a new, updated version of the original. There are a lot of clones out there, look no further than this one.

**Dragon Repeller Rebirth** is a complete overhaul of the original game, utilizing just HTML, CSS and JavaScript. Just like the original, Dragon Repeller: Rebirth is set in a mythical realm, where players must embark on a long and difficult quest to defeat a fearsome dragon. Navigate a sprawling world — from a bustling town complete with shops, an inn, a guild hall and a spell academy, to seven distinct combat areas: a mysterious cave, an ominous forest, a dangerous dungeon, a scorching volcano, a treacherous swamp, ancient ruins and frozen mountains. Along the journey, the player will encounter over 70 unique monsters, collect powerful weapons, armor and helmets, learn elemental magic, complete guild quests, and manage hunger and thirst to survive.

## Features New to Rebirth:

- **New Spell System:**
	- Added mana and max mana values to character skillset.
	- **19 spells** across 8 elements: Arcane, Fire, Ice, Lightning, Earth, Wind, Dark and Light.
	- Base spells include Magic Bolt, Healing, Teleport, Fire Bolt, Ice Bolt, Lightning Bolt, Earth Spike, Wind Slash, Shadow Bolt and Holy Light.
	- All base offensive and healing spells can be upgraded to Tier II versions (e.g., Magic Bolt → Magic Bolt II, Fire Bolt → Fire Bolt II).
	- Spells can be purchased from the Spell Shop in the Castle District, each with individual pricing.
	- Spells can also be learned by an RNG chance after a battle.
	- Player can see their available spells in the stats UI.
	- Maximum Mana is increased by using spells.
	- Offensive spells inflict elemental damage, with bonus damage against monster weaknesses and reduced damage against resistances.
	- Healing/Healing II heals the player.
	- Teleport gives a 100% flee chance.
	- Attacking monsters and resting restore mana.

- **New Armor System:**
	- Added current armor display in character stats.
	- Available armors include Weathered Tunic, Leather Garb, Iron Plate, Steel Armor, Diamond Mail, Obsidian Plate, Adamantium Suit, Dragon Repeller.
	- Armors can only be bought from the shop, but cannot break.
	- If player's armor is greater than monster damage, the player has a chance of negating all damage.
	- Player can see their equipped armor in the stats UI.

- **New Helmet System:**
	- A full set of 8 helmets: Leather Cap, Iron Helm, Steel Helm, Knight Visor, Diamond Crown, Obsidian Mask, Adamantium Helm, Dragon Crest.
	- Helmets provide additional defense, stacking with body armor.
	- Purchased separately from body armor in the Armor Shop's dedicated helmet sub-shop.

- **Elemental Combat System:**
	- Every monster has elemental **weaknesses** and **resistances**.
	- Hitting a weakness deals bonus damage; hitting a resistance deals reduced damage.
	- Encourages strategic spell selection based on the enemy you're facing.

- **Monster Skills & Status Effects:**
	- Monsters now have their own **skill pools** with over 100 unique abilities across all elements.
	- Monster skills can inflict **status effects**: Poison (DOT), Burn (DOT), Freeze (skip turn chance), Weaken (reduced player damage), Blind (increased miss chance), and Stun (guaranteed skip turn).
	- Skills can also have special properties like multi-hit, armor pierce, self-heal, and guaranteed critical hits.

- **Procedural Dungeon Maps:**
	- Each combat area generates a **procedural dungeon map** with rooms, corridors, an entrance and stairs to the next floor.
	- Navigate tile-by-tile through the dungeon with **fog of war** — dark areas require torches to reveal the map around you.
	- Encounter random monsters, discover treasure, and trigger events as you explore.
	- Find and defeat the **boss room** to unlock the next floor.
	- Floor progression scales monster difficulty.

- **Floor & Progression System:**
	- Track your current floor as you delve deeper into each area.
	- Monster stats scale with floor depth for increasing challenge.
	- **Infinite Dungeon** mode unlocks after clearing all seven areas, pulling monsters from every zone.

- **Guild System:**
	- Register at the **Guild Hall** and climb the ranks from F to S.
	- Each rank requires meeting XP, quest, and gold thresholds, plus defeating a **Guild Trial boss** (Guild Instructor, Guild Veteran, Guild Captain, Guild Commander, Guild Champion, Guild Master).
	- Higher guild ranks unlock access to more dangerous areas.
	- **Quest Board** offers procedurally generated quests with kill and collect objectives for bonus rewards.
	- **Material Exchange** lets you sell monster loot drops for gold.

- **Monster Loot & Materials:**
	- Every monster now drops loot — a **common** drop and a **rare** drop.
	- 71 unique common materials and 71 unique rare materials (e.g., Slime Gel / Crystal Slime Core, Phoenix Feather / Phoenix Ash, Dragon Scale / Dragon Heart).
	- Materials can be sold at the Guild's Material Exchange or collected for quests.

- **Survival System:**
	- **Hunger** and **Thirst** meters that decay over time as the in-game clock advances.
	- Purchase food and drinks from the Item Shop: Bread, Cooked Meat, Feast, Water, Juice, Fine Wine.
	- Each combat area has a unique **special food** with temporary combat buffs (e.g., Glowshroom for light damage boost, Lava Pepper for fire resistance).
	- Letting hunger or thirst hit zero has consequences — manage your supplies wisely.

- **In-Game Clock:**
	- A persistent day/night clock tracking hours, minutes and days.
	- Time advances when traveling between areas, resting at the inn, and performing various actions.
	- Daily rollover events affect inn room rental and survival stats.

- **Consumable Items:**
	- **Health Potions** in three tiers (Health Potion, Medium Health Potion, Large Health Potion) restoring percentage + flat HP.
	- **Mana Potions** in three tiers (Mana Potion, Medium Mana Potion, Large Mana Potion) restoring percentage + flat mana.
	- **Torches** for illuminating dark areas on dungeon maps.
	- **White Feather** for emergency dungeon escape.
	- Full item inventory with in-combat and out-of-combat usage.

- **Inventory & Equipment UI:**
	- Dedicated **Inventory** screen for viewing and using all consumables, food, potions and materials.
	- Dedicated **Equipment** screen for viewing and swapping weapons, armor and helmets.
	- Persistent sidebar buttons for quick access to inventory and equipment at any time.

- **Training Grounds:**
	- Practice your combat at the **Training Grounds** in the Castle District.
	- Hit a training dummy to test your damage output and weapon power without risk.

- **Finding Treasure:**
	- "Easter Egg" has been replaced with finding treasure. In the version I played, the Easter Egg was broken, allowing players a 100% chance of getting the easter egg, and nearly a 100% success rate of completing the Easter Egg successfully, allowing players to farm gold and then farm HP.
	- A treasure chest will rarely appear after slaying a monster, and can also be discovered while exploring dungeon maps.
	- The gold received from the chest will be equivalent reward for your current XP/monster slain.
	- Rarely, you may get a new weapon from the chest instead.

- **Continue and Restart Options:**
	- In the original game, "Permadeath" was the only choice on death. As this game is much more difficult and involved than the original, I opted to change this.
	- When you die, you have the choice to continue where you left off with a gold penalty.
	- Added a counter for the number of deaths.
	- When you slay the dragon, you can choose to continue playing instead of restarting.

## Overhauled Existing Features:

- **Monsters:**
	- Expanded from 3 monsters to **71 unique monsters** across 7 themed areas plus the Dragon boss.
	- **Cave** (10 monsters): Slime, Bat, Giant Rat, Spider, Wolf, Mushroom, Rock Crab, Salamander, Cave Bear, Goblin.
	- **Forest** (10 monsters): Boar, Forest Spider, Bandit, Pixie, Treant, Basilisk, Dire Wolf, Banshee, Owlbear, Harpy.
	- **Dungeon** (10 monsters): Skeleton, Ogre, Mimic, Troll, Gargoyle, Chimera, Wraith, Demon, Dark Knight, Drake.
	- **Volcano** (10 monsters): Magma Slime, Fire Imp, Lava Serpent, Flame Hound, Ember Elemental, Magma Golem, Inferno Bat, Fire Drake, Phoenix, Volcano Titan.
	- **Swamp** (10 monsters): Poison Frog, Bog Rat, Swamp Leech, Mire Crawler, Toxic Slime, Bog Witch, Swamp Hydra, Mud Golem, Plague Bearer, Swamp Dragon.
	- **Ruins** (10 monsters): Animated Armor, Stone Golem, Cursed Knight, Specter, Ancient Guardian, Lich Apprentice, Rune Golem, Death Knight, Lich, Ancient Dragon.
	- **Mountains** (10 monsters): Mountain Lion, Ice Wolf, Frost Giant, Snow Harpy, Yeti, Wyvern, Storm Eagle, Roc, Mountain Titan, Elder Wyvern.
	- Monster HP is dynamic and will increase a bit to match your XP.

- **Weapons:**
	- Available weapons include Stick, Dagger, Claw Hammer, Staff, Sword, Spear, Greatsword, Dragon Slayer.
	- Weapon power ranges from 5 (Stick) to 2000 (Dragon Slayer).
	- Weapon prices are dynamic and increase based on the strength of the weapon.
	- Weapon damage values have been overhauled and fine tuned.
	- Player can see their equipped weapon in the stats UI.

- **UI Updates:**
	- Player was given a "Max HP" stat to prevent the player from farming HP.
	- Player was given a "Mana/Max Mana" to go along with the Spell System.
	- Player can now see their equipped Weapon, Armor, Helmet and Available Spells.
	- Player can see lifetime stats: deaths, monsters slain, gold spent, weapons broken, treasure found, times fled.
	- Dynamic button generation replaces the original fixed 3-button layout, allowing for expanded options per screen.
	- In-game clock display showing current hour, minute and day.
	- Hunger and thirst bars in the survival display.
	- Guild rank display.
	- Status effect indicators during combat.

- **Location Updates:**
	- Expanded from 3 locations to a full world map with **7 combat areas** plus town districts.
	- Town is divided into **Business District** (Weapon Shop, Armor Shop, Item Shop, General Goods), **Castle District** (Spell Shop, Training Grounds), **Guild Hall**, **Inn**, and **Map** (area selection).
	- All monster encounters increase in difficulty per area, with areas ordered by difficulty: Cave → Forest → Dungeon → Volcano → Swamp → Ruins → Mountains.
	- Area access is gated by Guild Rank progression.
	- Each area has a travel time cost that advances the in-game clock.

- **Store Updates:**
	- The single store has been replaced by **multiple specialized shops**.
	- **Weapon Shop**: Buy weapons with prices scaling to power.
	- **Armor Shop**: Separate sub-shops for body armor and helmets.
	- **Item Shop**: Buy food, drinks, special area foods with combat buffs, and consumable potions.
	- **General Goods**: Buy torches and White Feathers for dungeon exploration.
	- **Inn**: Rest to restore HP and mana; rent a room for the day.
	- Removed the "Sell" option from weapons. It was unnecessary and introduced a bug which prevented weapons from breaking.

- **Weapon Break System:**
	- Overhauled from a static % chance of happening to a % chance that decreases based on the enemy you are fighting and your current XP.
	- The player is now notified if a weapon is broken in both the UI and in a message window (with red text).

- **XP and Gold Earned:**
	- XP and Gold earned are now dynamically earned based on the enemy you are fighting and your current XP.
	- Naturally the stronger you are, the less XP and Gold you get from slaying a weaker enemy.

- **Damage/Block/Flee/Dodge Systems:**
	- Damage calculations have been vastly overhauled for both monsters and the player.
	- Player has a *chance* of blocking an attack from a monster if the player's armor + helmet defense is greater than the attack.
	- Successful flee chance has been reduced from 100% to a chance of fleeing.
	- Successful dodge chance has been reduced from 100% to a chance of dodging.
	- A successful dodge restores some HP.

- **Text Modifications:**
	- Self-Explanatory, but many capitalization errors and punctuation/grammar issues have been resolved.
	- Modified game screen text to give player some direction at the beginning of the game.
	- Revised the story from "slay the dragon" to something a bit more in depth.
	- Revised some text throughout the game to make it less weird and/or generic.


## Technologies
- **HTML:** Structures the game's layout.
- **CSS:** Provides styling to enhance the gaming experience.
- **JavaScript:** Powers the game's logic and interactivity.

## Getting Started
- To play the game, press the itch.io link above or simply clone the repository and open the `Dragon Repeller - Rebirth.html` file in a web browser.

## Contributing
Contributions to enhance the game, fix bugs, or suggest new features are always welcome. Please feel free to fork the repository and submit pull requests.

**Embark on your adventure and become the hero who repels the dragon!**

Visit the original author of the project here:
https://github.com/Kunal301/RPG-Dragon-Repeller


Future Updates:
  * Images: Icons, monsters, locations, etc.
