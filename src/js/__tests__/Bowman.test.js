import Bowman from "../Bowman";

test("initial class", () => {
  const received = new Bowman("Ivan", "Bowman");

  expect(received).toEqual({
    name: "Ivan",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
