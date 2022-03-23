export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 10;
    this.defence = 10;

    if (
      typeof this.name !== "string" ||
      this.name.length < 2 ||
      this.name.length > 10 ||
      (this.type !== "Bowerman" &&
        this.type !== "Swordsman" &&
        this.type !== "Magician" &&
        this.type !== "Daemon" &&
        this.type !== "Undead" &&
        this.type !== "Zombie")
    ) {
      throw new Error("Некорректные данные!");
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack = (this.attack * 0, 2) + this.attack;
      this.defence = (this.defence * 0, 2) + this.defence;
      this.health = 100;
    } else throw new Error("Нельзя повысить левел умершего!");
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else this.health = 0;
  }
}
