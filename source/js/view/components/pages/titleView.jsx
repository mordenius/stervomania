import React from "react";
import TransitionView from '~/view/components/common/transitionView.jsx';
import FormComponents from '~/view/components/common/formComponent.jsx';

class TitieView extends TransitionView {
	getInner() {
		return (
				<div className="one">
					<div className="title">
						<h1>Отношения в удовольствие</h1>
						<img src="./build/img/logo-in.png" alt="" />
						<p>бесплатный интенсив только 5 - 6 - 7 июля</p>
					</div>


					<p>О сокровенном без стеснения</p>
					<p>
						3 дня мы с Вами будем говорить о том, чего желают<br />
						миллионы людей по всему миру. Но получают далеко не все.
					</p>

					<FormComponents />
				</div>
		);
	}
}

export default TitieView;
