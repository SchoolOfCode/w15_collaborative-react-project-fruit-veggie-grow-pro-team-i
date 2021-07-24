const { LandingInfoBlock } = require("./LandingInfoBlock");
// import LandingInfoBlock from "./LandingInfoBlock";

test("when info body is true then info body should be set to first item in array", () => {
  // ARRANGE
  const actualInfoBody = `Do you fancy learning how to grow your own fruitand vegetables? \nWe are here to help you get into growing some crops!\nWhether you're a complete beginner or your fingers are green, please check out our easy to follow introductions to growing your own fruit and vegetables.`;
  // const testInfoBody = true;
  const expected = true;

  // ACT
  const actual = LandingInfoBlock(actualInfoBody);
  // ASSESS
  expect(actual).toEqual(expected);
});
