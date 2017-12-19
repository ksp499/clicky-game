import React, { Component } from "react";
import Image from "./Image";
import images from "../images.json";

class GameContainer extends Component {

	state = {
		images
	};

	handleOnClick = event => {
		this.shuffleImages(this.state.images);
	};

	shuffleImages = images => {
		console.log(images.length);

		let counter = images.length;

		while (counter > 0) {
			let index = Math.floor(Math.random() * counter);

			counter--;

			let temp = images[counter];
			images[counter] = images[index];
			images[index] = temp;
		}

		this.setState({
			images: images
		});
	};

	render() {
		return (
			<div>
				{this.state.images.map(image => (
					<Image
						key={image.id}
						id={image.id}
						name={image.name}
						image={image.image}
						handleOnClick={this.handleOnClick}
					/>
				))}
			</div>
		);
	}

}

export default GameContainer;