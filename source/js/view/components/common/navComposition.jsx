import React, { Component } from "react";
import _ from "lodash";
import ViewList from "~/view/viewList";

class NavComposition extends Component {
	render() {
		return (
			<div className="container">
				{this.getList()}
			</div>
		);
	}

	getList() {
		return _.map(_.range(_.size(ViewList)), value => {
			return (
				<MenuItem key={value} val={`#${value}`} history={this.props.history} />
			);
		});
	}
}

class MenuItem extends Component {
	constructor(props) {
		super(props);

		props.history.listen((location) => {
			if (location.hash === this.state.val) this.setState({ active: true });
			else this.setState({ active: false });
		});

		this.state = {
			val: this.props.val,
			active: false
		};
	}

	render() {
		return (
			<div
				className={this.state.active ? "active" : false}
				onClick={this.goLink.bind(this)}
			/>
		);
	}

	goLink() {
		this.props.history.push(this.state.val);
	}
}

export default NavComposition;
