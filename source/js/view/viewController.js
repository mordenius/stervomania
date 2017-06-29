import React, { createElement } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import _ from "lodash";

import ViewList from "./viewList";
import NavComposition from './components/common/navComposition.jsx';

class ViewController {
	constructor(options) {
		this.history = options.history;
		this.subscribe();

		this.current = null;
		this.next = null;

		window.addEventListener('scroll', this.handleScroll);

		this.flip(0);
		render(
			createElement(
				NavComposition,
				options,
				null
			),
			document.getElementById("menu")
		);
	}

	handleScroll(e) {
		console.log(e);
	}

	subscribe() {
		const unlisten = this.history.listen((location, action) => {
			// location is an object like window.location
			console.log(action, location.hash, location.state);

			this.flip(_.replace(location.hash, "#", ""));
		});
	}

	flip(next) {
		this.next = next;
		this.fadeIn();
		if (this.current != null) this.fadeOut();
		this.current = next;
	}

	fadeIn() {
		const comp = ViewList[this.next];
		render(
			createElement(
				comp.view,
				null
			),
			document.getElementById(comp.wrap)
		);
	}

	fadeOut() {
		const wrap = ViewList[this.current].wrap;
		unmountComponentAtNode(document.getElementById(wrap));
	}
}

export default ViewController;
