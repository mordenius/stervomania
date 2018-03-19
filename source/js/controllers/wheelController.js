import _ from "lodash";

class WheelController {
	constructor(options) {
		this.history = options.history;
		this.view = options.view;

		this.init();
	}

	init() {
		var elem = document.getElementById("container");

		if (elem.addEventListener) {
			if ("onwheel" in document) {
				// IE9+, FF17+
				elem.addEventListener("wheel", this.onWheel.bind(this));
			} else if ("onmousewheel" in document) {
				// устаревший вариант события
				elem.addEventListener("mousewheel", this.onWheel.bind(this));
			} else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
					elem.addEventListener('scroll', this.onWheel.bind(this));
			} else {
				// Firefox < 17
				elem.addEventListener("MozMousePixelScroll", this.onWheel.bind(this));
			}
		} else {
			// IE8-
			elem.attachEvent("onmousewheel", this.onWheel.bind(this));
		}
	}

	onWheel(e) {
		// Это решение предусматривает поддержку IE8-
		e = e || window.event;

		// deltaY, detail содержат пиксели
		// wheelDelta не дает возможность узнать количество пикселей
		// onwheel || MozMousePixelScroll || onmousewheel
		var delta = e.deltaY || e.detail || e.wheelDelta;

		console.log(this.view.current);
		let current = parseInt(this.view.current);
		current += delta > 0 ? 1 : -1;
		this.history.push(`#${current}`);

		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
	}
}

export default WheelController;
