import { createElement } from "react";
import { render } from "react-dom";

import IndexComposition from "./indexComposition.jsx";

class ViewController {
	constructor(options) {
		render(
			createElement(IndexComposition, options, null),
			document.getElementById("container")
		);
	}
}

export default ViewController;