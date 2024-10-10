import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("App form submission", async () => {
    render(<App />);

    //Get the email input and submit button
    const emailInput = screen.getByTestId("emailInput");
    const submitButton = screen.getByTestId("submitButton");

    //Type a valid email intp the email input
    await userEvent.type(emailInput, "ali");

    //Check if the submit button is disabled
    expect(submitButton.disabled).toBe(false);
});