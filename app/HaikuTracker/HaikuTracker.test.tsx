import { fireEvent, render, screen } from "@testing-library/react";
import { HaikuTracker } from "./HaikuTracker";

test("Can copy haiku to clip board", () => {
	render(<HaikuTracker />);
	const writeText = jest.fn();
	Object.assign(navigator, {
		clipboard: {
			writeText
		}
	});
	expect(writeText).not.toHaveBeenCalled();

	const lines: string[] = ["Line 1", "Line 2", "Line 3"];
	const expected: string = lines.reduce((prev, current) => {
		return prev + '\n' + current;
	});
	const inputs = screen.getAllByTestId("syllableTextInput");
	expect(inputs).toHaveLength(lines.length);
	lines.forEach((line, index) => {
		fireEvent.change(inputs[index], {
			target: {
				value: line
			}
		});
	});
	fireEvent.click(screen.getByTestId("copyButton"));
	expect(writeText).toHaveBeenCalledWith(expected);
});