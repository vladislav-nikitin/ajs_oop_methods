import Swordsman from "../Swordsman";

test("initial class", () => {
  const received = new Swordsman("Ivan", "Swordsman");

  expect(received).toEqual({
    name: "Ivan",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
