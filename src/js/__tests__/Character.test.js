import Character from "../Character";
import Zombie from "../Zombie";

test("initial class", () => {
  expect(new Character("Ivan", "Zombie")).toEqual({
    name: "Ivan",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
  });
});

test("error if typeof this.name !== string", () => {
  expect(() => new Character(123, "Bowman")).toThrow();
});

test("error if this.name.length < 2", () => {
  expect(() => new Character("I", "Bowman")).toThrow();
});

test("error if this.name.length > 10", () => {
  expect(() => new Character("Ivanivanivanivan", "Bowman")).toThrow();
});

test("error if this.type is not valid", () => {
  expect(() => new Character("Ivan", "Hunter")).toThrow();
});

test("levelUp", () => {
  const zombie = new Character("Ivan", "Zombie");
  zombie.health = 40;
  zombie.levelUp();
  expect(zombie).toEqual({
    name: "Ivan",
    type: "Zombie",
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  });
});

test("error if health = 0", () => {
  const zombie = new Character("Ivan", "Zombie");
  zombie.health = 0;
  expect(() => zombie.levelUp()).toThrow();
});

test("damage(points)", () => {
  const zombie = new Character("Ivan", "Zombie");
  zombie.damage(10);
  expect(zombie.health).toBe(91);
});

test("damage(points) health < 0", () => {
  const zombie = new Character("Ivan", "Zombie");
  zombie.health = -25;
  zombie.damage(10);
  expect(zombie.health).toBe(0);
});
