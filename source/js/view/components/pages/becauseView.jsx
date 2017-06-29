import React from "react";
import TransitionView from "~/view/components/common/transitionView.jsx";
import FormComponents from "~/view/components/common/formComponent.jsx";

class BecauseView extends TransitionView {
	getInner() {
		return (
			<div className="because">
				<div className="fourDown">
					<div>
						<p>
							Потому что жизнь пролетает так <br />
							стремительно…
						</p>
						<p>
							А закаты намного прекраснее, когда <br />
							провожаешь их вдвоем...
						</p>
					</div>

					<FormComponents />
				</div>
			</div>
		);
	}
}

export default BecauseView;
