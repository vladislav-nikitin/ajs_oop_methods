import Daemon from "../Daemon";

test("initial class", () => {
  const received = new Daemon("Ivan", "Daemon");

  expect(received).toEqual({
    name: "Ivan",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
