import { Container } from "@mui/material";
import { HaikuTracker } from "./HaikuTracker/HaikuTracker";

export const metadata = {
  title: "App Router",
};

export default function Page() {
	return <Container maxWidth="md">
			<HaikuTracker />
		</Container>
}