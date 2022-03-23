import Bowerman from "../Bowerman";

test("initial class", () => {
  const received = new Bowerman("Ivan", "Bowerman");

  expect(received).toEqual({
    name: "Ivan",
    type: "Bowerman",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
