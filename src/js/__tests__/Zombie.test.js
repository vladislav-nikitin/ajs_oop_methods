import Zombie from "../Zombie";

test("initial class", () => {
  const received = new Zombie("Ivan", "Zombie");

  expect(received).toEqual({
    name: "Ivan",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
