export class Block{
	/**
   * @param {color} color
   * @param {number} helath
   * @param {number} defense
   * @param {number} stamina
   * @param {number} power
   * @param {number} weight	
   * @param {number} aggression
   * @param {number} intelligence
   * @param {number} pp
   * @param {string} description
   */
	constructor(color ,health, defense, stamina, power, weight, aggression, intelligence, pp,description){
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

}
