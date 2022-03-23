import Undead from "../Undead";

test("initial class", () => {
  const received = new Undead("Ivan", "Undead");

  expect(received).toEqual({
    name: "Ivan",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
