const types = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];

export default class Character {
  constructor(name, type) {
    if (typeof name !== "string" || name.length < 2 || name.length > 10) {
      throw new Error(
        "Некорректные данные! name поддерживает только строковый тип данных. Длина name должна быть от 2 до 10 символов"
      );
    }

    if (!types.includes(type)) {
      throw new Error("Укажите корректный тип персонажа");
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else throw new Error("Нельзя повысить левел умершего!");
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else this.health = 0;
  }
}
