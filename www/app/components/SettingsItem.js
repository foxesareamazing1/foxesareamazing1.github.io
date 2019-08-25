import React from "react";

class SettingsHeader extends React.Component {
	render() {
		return (
			<div className="settings-header">{this.props.children}</div>
		);
	}
}

class SettingsSection extends React.Component {
	render() {
		return (
			<div className="settings-section">{this.props.children}</div>
		);
	}
}

class SettingsOption extends React.Component {
	constructor() {
		super();
		this._guid = Photon.guid();
	}

	componentDidMount() {
		let _this = this;
		$(`#${this._guid}`).click(function() {
			let checkbox = $(this).children(".settings-checkbox").children(".checkbox").children("input");
			checkbox.prop("checked", !checkbox.prop("checked")).change();
			_this.props.onClick();
		})
	}

	render() {
		return (
			<div className="settings-option waves-effect" id={this._guid}>{this.props.children}</div>
		);
	}
}

class SettingsIcon extends React.Component {
	render() {
		return (
			<i className="settings-icon material-icons">{this.props.icon}</i>
		);
	}
}

class SettingsName extends React.Component {
	render() {
		return (
			<div className="settings-name">{this.props.name}</div>
		);
	}
}

class SettingsCheckbox extends React.Component {
	constructor() {
		super();
		this._guid = Photon.guid();
	}

	componentDidMount() {
		let _this = this;
		$(`#${this._guid}`).change(function() {
			_this.props.onChange($(this).prop("checked"))
		})
	}

	render() {
		return (
			<div className="settings-checkbox">
				<div className="checkbox">
					<input type="checkbox" defaultChecked={this.props.value} id={this._guid}/>
				</div>
			</div>
		);
	}
}

export { SettingsCheckbox, SettingsHeader, SettingsIcon, SettingsName, SettingsOption, SettingsSection };
