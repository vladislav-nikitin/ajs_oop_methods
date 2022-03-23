import Magician from "../Magician";

test("initial class", () => {
  const received = new Magician("Ivan", "Magician");

  expect(received).toEqual({
    name: "Ivan",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
