import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TweetComposer from "./TweetComposer";

interface SetupElements {
   textarea: HTMLTextAreaElement;
   counter: HTMLElement;
   button: HTMLButtonElement;
}

const setup = (): SetupElements => {
   render(<TweetComposer />);
   return {
      textarea: screen.getByLabelText("tweet-textarea") as HTMLTextAreaElement,
      counter: screen.getByTestId("char-counter"),
      button: screen.getByRole("button", {
         name: /Tweet/i,
      }) as HTMLButtonElement,
   };
};

describe("TweetComposer Component", () => {
   test("initially renders empty with disabled button", () => {
      const { textarea, counter, button } = setup();

      expect(textarea).toHaveValue("");
      expect(counter).toHaveTextContent("0 / 240");
      expect(button).toBeDisabled();
      expect(button).toHaveClass("bg-gray-300");
   });

   test("updates character count and enables button when typing", async () => {
      const { textarea, counter, button } = setup();
      const user = userEvent.setup();
      await user.type(textarea, "Hello");

      expect(textarea).toHaveValue("Hello");
      expect(counter).toHaveTextContent("5 / 240");
      expect(button).toBeEnabled();
      expect(button).toHaveClass("bg-blue-500");
   });

   test("shows error styles and disables button when limit exceeded", async () => {
      const { textarea, counter, button } = setup();
      const user = userEvent.setup();
      const longText = "a".repeat(241);
      await user.type(textarea, longText);

      expect(counter).toHaveTextContent("241 / 240");
      expect(button).toBeDisabled();
      expect(counter).toHaveClass("text-red-500");
      expect(textarea).toHaveClass("border-red-500");
   });
});
