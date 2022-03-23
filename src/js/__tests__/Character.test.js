import Character from "../Character";

test("initial class", () => {
  expect(new Character("Ivan", "Zombie")).toEqual({
    name: "Ivan",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 10,
    defence: 10,
  });
});

test("error if typeof this.name !== string", () => {
  expect(() => new Character(123, "Bowerman")).toThrow();
});

test("error if this.name.length < 2", () => {
  expect(() => new Character("I", "Bowerman")).toThrow();
});

test("error if this.name.length > 10", () => {
  expect(() => new Character("Ivanivanivanivan", "Bowerman")).toThrow();
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
    attack: 12,
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
