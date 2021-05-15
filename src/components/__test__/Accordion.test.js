import { render, screen, cleanup } from "@testing-library/react";
import Accordion from "../Accordion";

test("should render Accordion component", () => {
  render(<Accordion />);
  const accordionElement = screen.getByTestId("Accordion-test");
  expect(accordionElement).toBeInTheDocument();
});
