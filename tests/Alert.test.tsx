import React from "react";
import { test, expect, describe, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Alert from "../src/components/Alert";

describe("Alert", () => {
	const handleClick = () => {};

	it("renders", () => {
		render(<Alert type="danger">alert</Alert>);
		const alert = screen.getByText("alert");
		expect(alert.className).toBe("alert alert-danger");
	});
});
