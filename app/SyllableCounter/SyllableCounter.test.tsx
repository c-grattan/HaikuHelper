import { fireEvent, render, screen } from "@testing-library/react"
import { SyllableCounter, countSyllables } from "./SyllableCounter";

describe("Function", () => {
	test("Gets correct count for words", () => {
		expect(countSyllables("123")).toEqual(1);
		expect(countSyllables("")).toEqual(0);
		expect(countSyllables("amy")).toEqual(2);
		expect(countSyllables("extracurricular")).toEqual(6);
	});

	test("Gets correct count for sentences", () => {
		expect(countSyllables("hello my name is thomas")).toEqual(7);
	});
});

describe("Component", () => {
	const limit: number = 7;
	beforeEach(() => {
		render(<SyllableCounter limit={limit} />);
	});

	function getTextInput(): HTMLInputElement {
		return screen.getByTestId("syllableTextInput");
	}

	function changeText(text: string, input: HTMLInputElement = getTextInput()): void {
		fireEvent.change(input, {
			target: {
				value: text
			}
		});
	}

	test("Can input text", () => {
		const textInput = getTextInput();
		const expected: string = "Text input";
		expect(textInput.value).toEqual("");

		changeText(expected, textInput);

		expect(getTextInput().value).toEqual(expected);
	});

	test("Displays text syllable count", () => {
		function readSyllableCount(): number {
			const countString: string | null = screen.getByTestId("syllableCount").textContent;
			if(countString) {
				return Number.parseInt(countString);
			} else {
				return 0;
			}
		}
		expect(readSyllableCount()).toEqual(0);
		const newSentence: string = "This is a new sentence";
		changeText(newSentence);
		expect(readSyllableCount()).toEqual(countSyllables(newSentence));
	});

	test("Displays syllable limit", () => {
		expect(screen.getByTestId("syllableLimit").textContent).toEqual(limit.toString());
	});
});