import { content } from "./content";
import { Section } from "./components/Section";

const App = (props) => {
	return (
		<>
			{
			content["fr"].map((part, i) => {
				return (
					<>
						<Section section={{part, i}} />
						{part.svg}
					</>
				)
			})
			}
		</>
	);
}

export default App;
