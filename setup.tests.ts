import { cleanup } from "@testing-library/react";
import { expect, afterEach } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom";

expect.extend(matchers);

afterEach(() => {
	cleanup();
});
