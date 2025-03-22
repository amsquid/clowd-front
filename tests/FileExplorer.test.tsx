import React from "react";
import { test, expect, describe, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import FileExplorer from "../src/components/FileExplorer";

describe("FileExplorer", () => {
	it("renders", () => {
		render(<FileExplorer ip="http://localhost:3000" />);
		expect(true).toBe(true);
	});
});
