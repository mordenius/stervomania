import React from "react";
import TransitionView from "~/view/components/common/transitionView.jsx";
import FormComponents from "~/view/components/common/formComponent.jsx";

class BottomView extends TransitionView {
	getInner() {
		return (
			<div className="six">
				<div className="wrapper">
					<p>
						Отношения должны приносить удовольствие и радость! <br />
						Иначе, зачем они?
					</p>
					<p>
						Если думаете так же - <br />
						записывайтесь на интенсив!
					</p>

					<FormComponents />
				</div>

				<img src="./build/img/logo.png" alt="" />
			</div>
		);
	}
}

export default BottomView;
