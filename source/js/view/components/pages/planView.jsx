import React from "react";
import TransitionView from "~/view/components/common/transitionView.jsx";

class PlanView extends TransitionView {
	getInner() {
		return (
			<div className="three threeUp">
				<img src="./build/img/threeUp.jpg" alt="" />
			</div>
		);
	}
}

export default PlanView;
