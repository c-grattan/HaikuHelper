"use client"
import { ChangeEvent, Dispatch, SetStateAction, use, useState } from "react";

function getWordSyllables(word: string, minLength: number = 2): number {
	if(word.length === 0) {
		return 0;
	} else if(word.length <= minLength) {
		return 1;
	} else {
		let newWord = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
		newWord = newWord.replace(/^y/, '');
		const syllables = newWord.match(/[aeiouy]{1,2}/g);

		if(syllables) {
			return syllables.length;
		} else {
			return 1;
		}
	}
}

export function countSyllables(inputText: string): number {
	let text: string = inputText.toLowerCase();

	const words = text.split(' ');
	return words.map((word: string) => {
		return getWordSyllables(word);
	}).reduce((prev, current) => {
		return prev + current;
	});
}

type SCProps = {
	limit: number,
	lineText?: [string, Dispatch<SetStateAction<string>>]
};

export const SyllableCounter = ({limit, lineText}: SCProps) => {
	let [text, setText] = lineText ? lineText : useState("");

	function handleTextChange(event: ChangeEvent<HTMLInputElement>) {
		setText(event.target.value);
	}

	return <>
		<input data-testid="syllableTextInput" value={text} onChange={(event) => {handleTextChange(event)}} />
		<p>
			<span data-testid="syllableCount">{countSyllables(text)}</span>
			/
			<span data-testid="syllableLimit">{limit}</span>
		</p>
	</>;
};