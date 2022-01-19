import { content } from "./content";
import { Section } from "./components/Section";

const App = () => {

	const language = "fr";

	return (
		<>
			<svg id="visual" viewBox="0 0 1920 200" width="1920" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M0 43L29.2 42.7C58.3 42.3 116.7 41.7 174.8 46C233 50.3 291 59.7 349.2 61C407.3 62.3 465.7 55.7 523.8 51.3C582 47 640 45 698.2 46.7C756.3 48.3 814.7 53.7 872.8 52.7C931 51.7 989 44.3 1047.2 48C1105.3 51.7 1163.7 66.3 1221.8 71.7C1280 77 1338 73 1396.2 68.7C1454.3 64.3 1512.7 59.7 1570.8 57C1629 54.3 1687 53.7 1745.2 52.3C1803.3 51 1861.7 49 1890.8 48L1920 47L1920 0L1890.8 0C1861.7 0 1803.3 0 1745.2 0C1687 0 1629 0 1570.8 0C1512.7 0 1454.3 0 1396.2 0C1338 0 1280 0 1221.8 0C1163.7 0 1105.3 0 1047.2 0C989 0 931 0 872.8 0C814.7 0 756.3 0 698.2 0C640 0 582 0 523.8 0C465.7 0 407.3 0 349.2 0C291 0 233 0 174.8 0C116.7 0 58.3 0 29.2 0L0 0Z" fill="#ffffff"></path><path d="M0 69L29.2 68.3C58.3 67.7 116.7 66.3 174.8 70.7C233 75 291 85 349.2 88.7C407.3 92.3 465.7 89.7 523.8 86.3C582 83 640 79 698.2 82.3C756.3 85.7 814.7 96.3 872.8 95.3C931 94.3 989 81.7 1047.2 83C1105.3 84.3 1163.7 99.7 1221.8 104.7C1280 109.7 1338 104.3 1396.2 99.3C1454.3 94.3 1512.7 89.7 1570.8 89.7C1629 89.7 1687 94.3 1745.2 95.7C1803.3 97 1861.7 95 1890.8 94L1920 93L1920 45L1890.8 46C1861.7 47 1803.3 49 1745.2 50.3C1687 51.7 1629 52.3 1570.8 55C1512.7 57.7 1454.3 62.3 1396.2 66.7C1338 71 1280 75 1221.8 69.7C1163.7 64.3 1105.3 49.7 1047.2 46C989 42.3 931 49.7 872.8 50.7C814.7 51.7 756.3 46.3 698.2 44.7C640 43 582 45 523.8 49.3C465.7 53.7 407.3 60.3 349.2 59C291 57.7 233 48.3 174.8 44C116.7 39.7 58.3 40.3 29.2 40.7L0 41Z" fill="#d2daf4"></path><path d="M0 147L29.2 145.7C58.3 144.3 116.7 141.7 174.8 141.3C233 141 291 143 349.2 145.3C407.3 147.7 465.7 150.3 523.8 153.3C582 156.3 640 159.7 698.2 158.3C756.3 157 814.7 151 872.8 149C931 147 989 149 1047.2 151.3C1105.3 153.7 1163.7 156.3 1221.8 154.7C1280 153 1338 147 1396.2 148C1454.3 149 1512.7 157 1570.8 156.7C1629 156.3 1687 147.7 1745.2 144C1803.3 140.3 1861.7 141.7 1890.8 142.3L1920 143L1920 91L1890.8 92C1861.7 93 1803.3 95 1745.2 93.7C1687 92.3 1629 87.7 1570.8 87.7C1512.7 87.7 1454.3 92.3 1396.2 97.3C1338 102.3 1280 107.7 1221.8 102.7C1163.7 97.7 1105.3 82.3 1047.2 81C989 79.7 931 92.3 872.8 93.3C814.7 94.3 756.3 83.7 698.2 80.3C640 77 582 81 523.8 84.3C465.7 87.7 407.3 90.3 349.2 86.7C291 83 233 73 174.8 68.7C116.7 64.3 58.3 65.7 29.2 66.3L0 67Z" fill="#a3b7e9"></path><path d="M0 175L29.2 173C58.3 171 116.7 167 174.8 167C233 167 291 171 349.2 172.7C407.3 174.3 465.7 173.7 523.8 175C582 176.3 640 179.7 698.2 180.3C756.3 181 814.7 179 872.8 178C931 177 989 177 1047.2 178C1105.3 179 1163.7 181 1221.8 180C1280 179 1338 175 1396.2 175C1454.3 175 1512.7 179 1570.8 178.3C1629 177.7 1687 172.3 1745.2 169.7C1803.3 167 1861.7 167 1890.8 167L1920 167L1920 141L1890.8 140.3C1861.7 139.7 1803.3 138.3 1745.2 142C1687 145.7 1629 154.3 1570.8 154.7C1512.7 155 1454.3 147 1396.2 146C1338 145 1280 151 1221.8 152.7C1163.7 154.3 1105.3 151.7 1047.2 149.3C989 147 931 145 872.8 147C814.7 149 756.3 155 698.2 156.3C640 157.7 582 154.3 523.8 151.3C465.7 148.3 407.3 145.7 349.2 143.3C291 141 233 139 174.8 139.3C116.7 139.7 58.3 142.3 29.2 143.7L0 145Z" fill="#6f96de"></path><path d="M0 201L29.2 201C58.3 201 116.7 201 174.8 201C233 201 291 201 349.2 201C407.3 201 465.7 201 523.8 201C582 201 640 201 698.2 201C756.3 201 814.7 201 872.8 201C931 201 989 201 1047.2 201C1105.3 201 1163.7 201 1221.8 201C1280 201 1338 201 1396.2 201C1454.3 201 1512.7 201 1570.8 201C1629 201 1687 201 1745.2 201C1803.3 201 1861.7 201 1890.8 201L1920 201L1920 165L1890.8 165C1861.7 165 1803.3 165 1745.2 167.7C1687 170.3 1629 175.7 1570.8 176.3C1512.7 177 1454.3 173 1396.2 173C1338 173 1280 177 1221.8 178C1163.7 179 1105.3 177 1047.2 176C989 175 931 175 872.8 176C814.7 177 756.3 179 698.2 178.3C640 177.7 582 174.3 523.8 173C465.7 171.7 407.3 172.3 349.2 170.7C291 169 233 165 174.8 165C116.7 165 58.3 169 29.2 171L0 173Z" fill="#1976d2"></path></svg>
			{
			content[language].map((part, i) => {
				return (
					<>
						<Section section={{part, i}} />
						{part.svg}
					</>
				);
			})
			}
			<div className="scrollArrowDiv">
				<i className="scrollArrow scrollArrow1 fa-solid fa-angle-down"></i>
				<i className="scrollArrow scrollArrow2 fa-solid fa-angle-down"></i>
			</div>
		</>
	);
}

export default App;
