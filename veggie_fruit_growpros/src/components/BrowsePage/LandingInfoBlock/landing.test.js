import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import LandingInfoBlock from "./";

const testProps = {
  infoHead: "title-one",
  InfoBody: [
    `Do you fancy learning how to grow your own fruitand vegetables? \nWe are here to help you get into growing some crops!\nWhether you're a complete beginner or your fingers are green, please check out our easy to follow introductions to growing your own fruit and vegetables.`,

    "Dont want to water your plants today. \n 'plants under the Weather', Why not check our weather forcast app to spy for rain ;) ",
  ],
};

test.only("if landing info block component is being rendered correctly in its container", () => {
  const { getByTestId } = render(<LandingInfoBlock {...testProps} />);
  const section = getByTestId("landing-container");
  expect(section).toBeInTheDocument();
});
