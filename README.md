# Play the Game Here:
[https://itch.io/embed-upload/10527186?color=333333](https://itch.io/embed-upload/10545641?color=333333)

![image](https://github.com/PrinceXaine/Dragon-Repeller-Rebirth/assets/96804005/26ff1fab-39aa-4369-8307-fe771d4cac9e)


The version I updated from:
![image](https://github.com/PrinceXaine/Dragon-Repeller-Rebirth/assets/96804005/39d7f7c9-5ee7-4529-9bf3-b1f4f1ca64a1)
https://github.com/samuelcardenasg23/role-playing-game


# Dragon Repeller Rebirth
This is a new, updated version of the original. There are a lot of clones out there, look no further than this one.


**Dragon Repeller Rebirth** is a complete overhaul of the original game, utilizing just HTML, CSS and JavaScript. Just like the original, Dragon Repeller: Rebirth is set in a mythical realm, where players must embark on a long and difficult quest to defeat a fearsome dragon, navigating different locations such as the town, complete with its own inn which you will frequent, a mysterious cave, an ominous forest and a dangerous dungeon. Along the journey, the player will encounter various monsters, new weapons and armor and collect gold.

## Features New to Rebirth:
- **New Spell System:**
	- Added mana and max mana values to character skillset.
  	- Added Spells, Magic Bolt, Healing, Teleport, Magic Bolt II, Healing II.
  	- Spells are learned by an RNG chance after a battle.
  	- Player can see their available spells in the stats UI.
  	- Maximum Mana is increased by using spells.
  	- Magic Bolt/Magic Bolt II inflicts damage.
  	- Healing/Healing II heals the player.
  	- Teleport gives a 100% flee chance.
  	- Attacking monsters and resting restore mana.

- **New Armor System:**
  	- Added current armor display in character stats.
	- Available armors include Weathered Tunic, Leather Garb, Iron Plate, Steel Armor, Diamond Mail, Obsidian Plate, Adamantium Suit, Dragon Repeller.
	- Armors can only be bought from the shop, but cannot break.
	- If player's armor is greater than monster damage, the player has a chance of negating all damage.
	- Player can see their equipped armor in the stats UI.

- **Finding Treasure:**
	- "Easter Egg" has been replaced with finding treasure. In the version I played, the Easter Egg was broken, allowing players a 100% chance of getting the easter egg, and 		nearly a 100% success rate of completing the Easter Egg successfully, allowing 	players to farm gold and then farm HP.
	- A treasure chest will rarely appear after slaying a monster.
	- The gold received from the chest will be equivalent reward for your current XP/monster slain.
	- Rarely, you may get a new weapon from the chest instead.

- **Continue and Restart Options:**
    	- In the original game, "Permadeath" was the only choice on death. As this game is much more difficult and involved than the original, I opted to change this.
	- When you die, you have the choice to continue where you left off with a gold penalty.
	- Added a counter for the number of deaths.
	- When you slay the dragon, you can choose to continue playing instead of restarting.

## Overhauled Existing Features:
- **Monsters:**
    	- Available monsters to fight include Slime, Wolf, Salamander, Goblin, Bandit, Basilisk, Banshee, Harpy, Ogre, Troll, Chimera, Drake, Dragon.
	- Monster HP is dynamic and will increase a bit to match your XP.

- **Weapons:**
	- Available weapons include Stick, Dagger, Claw Hammer, Staff, Sword, Spear, Greatsword, Dragon Slayer.
	- Weapon prices are dynamic and increase based on the strength of the weapon.
	- Weapon damage values have been overhauled and fine tuned.
	- Player can see their equipped weapon in the stats UI.

- **UI Updates:**
    	- Player was given a "Max HP" stat to prevent the player from farming HP.
	- Player was given a "Mana/Max Mana" to go along with the Spell System.
	- Player can now see their equipped Weapon, Armor and Available Spells.
	- Player can see lifetime stats for various actions.
	- Number of buttons increased from 3 to 5, allowing for more expanded options (such as more monsters, additional weapons/armors, etc).

- **Location Updates:**
	- Available locations include "Town", "Inn", "Cave", "Forest", "Dungeon", "Dragon"
	- All monster encounters increase in difficulty from left to right.

- **Store Updates:**
	- Store was renamed to "inn".
	- Player can rest to full HP and mana for a mere 40 gold.
	- Player can buy Weapons and Armor for a price equivalent to the damage/armor of the equipment.
	- Player can buy health potions which restore 10% HP for 10 gold.
	- Removed the "Sell" option from weapons. It was unnecessary and introduced a bug which prevented weapons from breaking.
	
- **Weapon Break System:**
	- Overhauled from a static % chance of happening to a % chance that decreases based on the enemy you are fighting and your current XP.
	- The player is now notified if a weapon is broken in both the UI and in a message window (with red text).
	
- **XP and Gold Earned:**
	- XP and Gold earned are now dynamically earned based on the enemy you are fighting and your current XP.
	- Naturally the stronger you are, the less XP and Gold you get from slaying a weaker enemy.

- **Damage/Block/Flee/Dodge Systems:**
	- Damage calculations have been vastly overhauled for both monsters and the player.
	- Player has a *chance* of blocking an attack from a monster if the player's armor is greater than the attack.
	- Successful flee chance has been reduced from 100% to a chance of fleeing. 
	- Successful dodge chance has been reduced from 100% to a chance of dodging.
	- A successful dodge restores some HP.

**Text Modifications:**
	- Self-Explanatory, but many capitalization errors and punctuation/grammar issues have been resolved.
	- Modified game screen text to give player some direction at the beginning of the game.
	- Revised the story from "slay the dragon" to something a bit more in depth.
	- Revised some text throughout the game to make it less weird and/or generic.


## Technologies
- **HTML:** Structures the game's layout.
- **CSS:** Provides styling to enhance the gaming experience.
- **JavaScript:** Powers the game's logic and interactivity.

## Getting Started
To play the game, simply clone the repository and open the `Dragon Repeller - Rebirth.html` file in a web browser. No additional installations or setups are required.

## Contributing
Contributions to enhance the game, fix bugs, or suggest new features are always welcome. Please feel free to fork the repository and submit pull requests.

**Embark on your adventure and become the hero who repels the dragon!**

Visit the original author of the project here:
https://github.com/Kunal301/RPG-Dragon-Repeller


Future Updates:
  * Images: Icons, monsters, locations, etc.
