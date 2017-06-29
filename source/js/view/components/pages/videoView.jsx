import React from "react";
import TransitionView from "~/view/components/common/transitionView.jsx";

class VideoView extends TransitionView {
	getInner() {
		return (
			<div className="two">
				<div className="twoUp">
					<iframe
						width="450"
						height="300"
						src="https://www.youtube.com/embed/FgXapwrwqfY"
						frameBorder="0"
						allowFullScreen
					/>
					<div className="twoUp-right">
						<p>
							Все люди на земле, хотят, чтобы их <br />
							любили. Даже те, кто яростно это<br />
							отрицает.
						</p>
						<p>
							Но большинство - одиноки или мучаются<br />
							оттого, что, по идее, должно радовать.
						</p>
						<p>
							Почему так происходит и как понять,<br />
							какой любви и отношений желает<br />
							именно Ваша душа - обо всем этом на<br />
							бесплатном курсе.
						</p>
					</div>
				</div>
				<div className="twoDown">
					<div className="wrapper">
						{this.getDays()}
					</div>
				</div>
			</div>
		);
	}

	getDays() {
		return _.map(["Знакомства", "Свидания", "Сексуальность"], (val, key) => {
			return (
				<div>
					<p>
						День {parseInt(key) + 1} <br />
						{val}
					</p>
					<div className="day" />
				</div>
			);
		});
	}
}

export default VideoView;
