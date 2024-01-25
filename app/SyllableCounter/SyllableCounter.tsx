"use client"
import { Grid, Input, InputAdornment, LinearProgress, TextField, Typography } from "@mui/material";
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
	lineText?: [string, Dispatch<SetStateAction<string>>],
	label?: string
};

export const SyllableCounter = ({limit, lineText, label}: SCProps) => {
	let [text, setText] = lineText ? lineText : useState("");

	function handleTextChange(text: string) {
		setText(text);
	}

	const syllableCount = countSyllables(text);

	return <>
		<TextField
			inputProps={{
				"data-testid": "syllableTextInput"
			}}
			value={text}
			onChange={(event) => {handleTextChange(event.target.value)}}
			label={label}
			InputProps={{
				endAdornment: <InputAdornment position="end"><span data-testid="syllableCount">{syllableCount}</span>/<span data-testid="syllableLimit">{limit}</span></InputAdornment>
			}}
			fullWidth
		/>
		<LinearProgress
			variant="determinate"
			data-testid="progressMeter"
			value={syllableCount / limit * 100}
		/>
		<br/>
	</>;
};