"use client"

import { SyllableCounter } from "../SyllableCounter/SyllableCounter";
import { Dispatch, SetStateAction, useState } from "react";

export const HaikuTracker = () => {
	const syllablePattern = [5, 7, 5];
	const lines: [string, Dispatch<SetStateAction<string>>][] = [useState(""), useState(""), useState("")];
	

	function copyHaiku(): void {
		navigator.clipboard.writeText(`${lines[0][0]}\n${lines[1][0]}\n${lines[2][0]}`);
	}

	return <>
		{syllablePattern.map((num, index) => { return <SyllableCounter key={index} limit={num} lineText={lines[index]} /> })}
		<button data-testid="copyButton" onClick={() => copyHaiku()}>Copy</button>
	</>
};