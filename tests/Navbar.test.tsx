import React from "react";
import { test, expect, describe, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../src/components/Navbar";

describe("Navbar", () => {
	const handleClick = () => {};

	it("renders", () => {
		render(
			<Navbar selectedItem="" navBarItems={[""]} handleClick={handleClick} />
		);
		expect(true).toBe(true);
	});

	it("shows correct items", () => {
		render(
			<Navbar
				selectedItem=""
				navBarItems={["Hello", "World"]}
				handleClick={handleClick}
			/>
		);
		const helloItem = screen.getByRole("link", { name: "Hello" });
		const worldItem = screen.getByRole("link", { name: "World" });

		expect(true).toBe(true);
	});
});
