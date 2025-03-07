import React from "react";
import { test, expect, describe, it } from "vitest";
import {
	render,
	screen,
	fireEvent,
	getByText,
	getByTestId,
	getByRole,
} from "@testing-library/react";
import Login from "../src/pages/Login";
import { BrowserRouter } from "react-router-dom";

describe("Login", () => {
	it("renders", () => {
		render(
			<BrowserRouter>
				<Login />
			</BrowserRouter>
		);
		expect(true).toBe(true);
	});

	it("shows login button correctly", () => {
		render(
			<BrowserRouter>
				<Login />
			</BrowserRouter>
		);
		const button = screen.getByRole("button", { name: "Login" });
		expect(true).toBe(true);
	});

	it("shows register button correctly", () => {
		render(
			<BrowserRouter>
				<Login />
			</BrowserRouter>
		);
		const button = screen.getByRole("button", { name: "Login" });
		const register = screen.getByText("Register");
		fireEvent.click(register);

		expect(button.innerHTML).toBe("Register");
	});
});
