import { SyllableCounter } from "./SyllableCounter/SyllableCounter";

export const metadata = {
  title: "App Router",
};

export default function Page() {
	const syllablePattern = [5, 7, 5];
	return syllablePattern.map((num) => { return <SyllableCounter limit={num} /> });
}
