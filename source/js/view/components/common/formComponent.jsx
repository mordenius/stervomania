import React, { Component } from "react";

class FormComponent extends Component {
	render(){
		return(
			<form action="URL">
				<input type="text" placeholder="Введите Ваш Е-майл" />
				<div>
					<input className="checkbox" type="checkbox" checked="{true}" />
					<label htmlFor="checkbox">никакого спама, гарантируем</label>
				</div>
				<button>
					<input value="Записаться" type="submit" />
				</button>
			</form>
		)
	}
}

export default FormComponent;