import React, { Component } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

export class Home extends Component {
	constructor() {
		super();
		this.state = {
			color: ""
		};
	}

	render() {
		let light1on = "";
		let light2on = "";
		let light3on = "";
		if (this.state.color === "red") light1on = "active";
		if (this.state.color === "yellow") light2on = "active";
		if (this.state.color === "green") light3on = "active";

		return (
			<div className="lights">
				<div
					onClick={() => this.setState({ color: "red" })}
					className={"r-light " + light1on}
				/>
				<div
					onClick={() => this.setState({ color: "yellow" })}
					className={"y-light " + light2on}
				/>
				<div
					onClick={() => this.setState({ color: "green" })}
					className={"g-light " + light3on}
				/>
			</div>
		);
	}
}
