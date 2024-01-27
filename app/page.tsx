import { Container } from "@mui/material";
import { HaikuTracker } from "./HaikuTracker/HaikuTracker";

export const metadata = {
  title: "Haiku Helper",
};

export default function Page() {
	return <Container maxWidth="md">
			<HaikuTracker />
		</Container>
}