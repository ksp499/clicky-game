import React, { Component } from "react";
import Image from "./Image";
import images from "../images.json";

class GameContainer extends Component {

	state = {
		images
	};

	render() {
		return (
			<div>
				{this.state.images.map(image => (
					<Image
						id={image.id}
						name={image.name}
						image={image.image}
					/>
				))}
			</div>
		);
	}

}

export default GameContainer;