import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";

class TransitionView extends Component {
	render() {
		return (
			<CSSTransitionGroup
				transitionName="example"
				transitionAppear={true}
				transitionAppearTimeout={500}
				transitionEnter={true}
				transitionLeave={true}
			>
				{this.getInner()}
			</CSSTransitionGroup>
		);
	}

	getInner() {
		return false;
	}
}

export default TransitionView;
