import React from "react";
import { test, expect, describe, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Page404 from "../src/pages/Page404";

describe("Page404", () => {
	it("renders", () => {
		render(<Page404 />);
		expect(true).toBe(true);
	});
});
