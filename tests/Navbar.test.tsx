import React from "react";
import { test, expect, describe, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../src/components/Navbar";

describe("Navbar", () => {
	const handleClick = () => {};

	it("renders", () => {
		render(<Navbar navBarItems={[""]} handleClick={handleClick} />);
		expect(true).toBe(true);
	});

	it("shows correct items", () => {
		render(
			<Navbar navBarItems={["Hello", "World"]} handleClick={handleClick} />
		);
		const helloItem = screen.getByRole("listitem", { name: "Hello" });
		const worldItem = screen.getByRole("listitem", { name: "World" });

		expect(true).toBe(true);
	});
});
