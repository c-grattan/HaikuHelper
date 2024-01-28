"use client"

import { Button, CssBaseline, Grid } from "@mui/material";
import { SyllableCounter } from "../SyllableCounter/SyllableCounter";
import { Dispatch, SetStateAction, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
	palette: {
		mode: "dark"
	}
});

export const HaikuTracker = () => {
	const syllablePattern = [5, 7, 5];
	const lines: [string, Dispatch<SetStateAction<string>>][] = [useState(""), useState(""), useState("")];

	function copyHaiku(): void {
		navigator.clipboard.writeText(`${lines[0][0]}\n${lines[1][0]}\n${lines[2][0]}`);
	}

	function reset(): void {
		lines.forEach((line) => {
			line[1]("");
		});
	} 

	return <ThemeProvider theme={darkTheme}>
		<CssBaseline />
		<Grid container direction="column">
			<Grid item>
				{syllablePattern.map((num, index) => { return <SyllableCounter key={index} limit={num} lineText={lines[index]} label={"Line " + (index + 1)} /> })}
			</Grid>
			<Grid item padding={1}>
				<center>
					<Button data-testid="copyButton" onClick={() => copyHaiku()}>Copy</Button>
					<Button data-testid="resetButton" onClick={() => reset()}>Reset</Button>
				</center>
			</Grid>
		</Grid>
	</ThemeProvider>
};