import { fireEvent, render, screen } from "@testing-library/react";
import { HaikuTracker } from "./HaikuTracker";

function getInputs(): HTMLInputElement[] {
	return screen.getAllByTestId("syllableTextInput");
}

function writeLine(text: string, index: number, inputs: HTMLElement[] = getInputs()): void {
	fireEvent.change(inputs[index], {
		target: {
			value: text
		}
	});
};

const lines: string[] = ["Line 1", "Line 2", "Line 3"];

beforeEach(() => {
	render(<HaikuTracker />);
});

test("Can copy haiku to clip board", () => {
	const writeText = jest.fn();
	Object.assign(navigator, {
		clipboard: {
			writeText
		}
	});
	expect(writeText).not.toHaveBeenCalled();
	const expected: string = lines.reduce((prev, current) => {
		return prev + '\n' + current;
	});
	lines.forEach((line, index) => {
		writeLine(line, index);
	});
	fireEvent.click(screen.getByTestId("copyButton"));
	expect(writeText).toHaveBeenCalledWith(expected);
});

test("Can reset lines", () => {
	const inputs = getInputs();
	lines.forEach((line, index) => {
		writeLine(line, index, inputs);
	});
	inputs.forEach((input) => {
		expect(input.value).not.toEqual("");
	});
	fireEvent.click(screen.getByTestId("resetButton"));
	inputs.forEach((input) => {
		expect(input.value).toEqual("");
	});
});