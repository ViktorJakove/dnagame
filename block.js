export class Block{
	/**
   * @param {string} name
   * @param {color} color
   * @param {number} health
   * @param {number} defense
   * @param {number} stamina
   * @param {number} power
   * @param {number} weight	
   * @param {number} aggression
   * @param {number} intelligence
   * @param {number} pp
   * @param {string} description
   */
	constructor(name, color, health, defense, stamina, power, weight, aggression, intelligence, pp,description){
		this.name = name;
		this.color = color;
		this.health = health;
		this.defense = defense;
		this.stamina = stamina;
		this.aggression = aggression;
		this.power = power;
		this.weight = weight;
		this.intelligence = intelligence;
		this.pp = pp;
		this.description = description || "No description provided";
	}
	toElement(draggable = true){
		const div = document.createElement('div');
		div.className = 'block';
		div.style.backgroundColor = this.color;
		div.textContent = this.name;
		
		div.draggable = true;
		div.addEventListener('dragstart',(e)=> {e.dataTransfer.setData('text/plain', JSON.stringify(this));});

		return div;
	}
}
