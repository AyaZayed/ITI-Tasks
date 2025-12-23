/* eslint-disable jest/valid-title */
import { render, screen } from "@testing-library/react";
import { setupServer } from "msw/node";
import Pets from "../Pets";
import { rest } from "msw";
import mockedCats from "../../../mocks/cats.json";
import userEvent from "@testing-library/user-event";

const server = setupServer(
  rest.get("http://localhost:4000/cats", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedCats));
  })
);

describe("Test Pets component", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  const setup = async () => {
    render(<Pets />);
    const catCards = await screen.findAllByRole("article");

    return {
      catCards,
      genderSelect: screen.getByLabelText(/Gender/i),
      favouriteSelect: screen.getByLabelText(/Favourite/i),
    };
  };

  test("Test Initial Component render", async () => {
    const { catCards } = await setup();
    expect(catCards.length).toBe(5);
  });

  test("Test render after Gender Filter", async () => {
    const { catCards, genderSelect } = await setup();

    userEvent.selectOptions(genderSelect, 'male');
    const filteredCards = screen.getAllByRole('article');

    expect(filteredCards.length).toBe(2);
    expect(filteredCards).toStrictEqual([catCards[1], catCards[3]]);
  });

  test("Test render after Favourite Filter", async () => {
    const { catCards, favouriteSelect } = await setup();

    userEvent.selectOptions(favouriteSelect, 'favoured');
    const filteredCards = screen.getAllByRole('article');

    expect(filteredCards.length).toBe(2);
    expect(filteredCards).toStrictEqual([catCards[0], catCards[1]]);
  });

  test("Test render after not favoured Filter", async () => {
    const { catCards, favouriteSelect } = await setup();

    userEvent.selectOptions(favouriteSelect, 'not favoured');
    const filteredCards = screen.getAllByRole('article');

    expect(filteredCards.length).toBe(3);
    expect(filteredCards).toStrictEqual([catCards[2], catCards[3], catCards[4]]);
  });

  test("Test after resetting favoured filter", async () => {
    const { catCards, favouriteSelect } = await setup();

    userEvent.selectOptions(favouriteSelect, 'favoured');
    userEvent.selectOptions(favouriteSelect, 'any');
    const filteredCards = screen.getAllByRole('article');

    expect(filteredCards.length).toBe(5);
    expect(filteredCards).toStrictEqual(catCards);
  });
});