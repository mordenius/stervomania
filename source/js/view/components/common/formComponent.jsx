import React, { Component } from "react";

class FormComponent extends Component {
	render() {
		return (
			<form
				action="https://ramenskiydaniil.autoweboffice.ru/?r=personal/newsletter/sub/add&id=5451&lg=ru"
				method="post"
				encType="application/x-www-form-urlencoded"
				acceptCharset="UTF-8"
				target="_blank"
			>
				<input
					type="hidden"
					value="1"
					id="required_fields_email"
					name="required_fields[email]"
				/>

				<input
					maxLength="255"
					name="Contact[email]"
					className="field_value"
					type="text"
					placeholder="Введите Ваш Е-майл"
				/>
				<div>
					<input className="checkbox" type="checkbox" checked="{true}" />
					<label htmlFor="checkbox">никакого спама, гарантируем</label>
				</div>
				<button>
					<input value="Записаться" type="submit" />
				</button>

				<div>
					<input
						type="hidden"
						value="226"
						id="form_newsletter_id_newsletter"
						name="Contact[id_newsletter]"
					/>

					<input
						type="hidden"
						value="0"
						id="form_newsletter_id_advertising_channel_page"
						name="Contact[id_advertising_channel_page]"
					/>
				</div>
			</form>
		);
	}
}

export default FormComponent;
