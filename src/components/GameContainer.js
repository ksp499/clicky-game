import React, { Component } from "react";
import Image from "./Image";
import images from "../images.json";

class GameContainer extends Component {

	state = {
		images,
		score: 0,
		clickedImages: []
	};

	handleOnClick = event => {
		if (this.checkDuplicate(event.target.id)) {
			console.log("no duplicate!");
		} else {
			console.log("duplicate card!!!");
		}
		
		this.shuffleImages(this.state.images);
	};

	checkDuplicate = number => {
		for(let i = 0; i < this.state.clickedImages.length; i++) {
			if ( this.state.clickedImages[i] === number) {
				return false;
			}
		}
		this.state.clickedImages.push(number);
		return true;
	}

	shuffleImages = images => {

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