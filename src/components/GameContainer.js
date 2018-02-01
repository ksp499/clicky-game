import React, { Component } from "react";
import Image from "./Image";
import images from "../images.json";

class GameContainer extends Component {

	state = {
		images,
		score: 0,
		topScore: 0,
		clickedImages: []
	};

	handleOnClick = event => {
		let tempScore = this.state.score;

		if (this.checkDuplicate(event.target.id)) {
			console.log("no duplicate!");
			++tempScore;
			this.setState({
				score: tempScore
			});
		} else {
			console.log("duplicate card!!!");
			if (this.state.score > this.state.topScore) {
				this.setState({
					topScore: this.state.score
				});
			}
			this.setState({
				score: 0,
				clickedImages: []
			});
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
				<div>
					<nav class="navbar navbar-default">
					  <ul>
					  	<li class="brand">
					  		<a href="/">Clicky Game</a>
					  	</li>
					  	<li>Click an image to begin!</li>
					  	<li>
					  		Score : {this.state.score} | Top Score : {this.state.topScore}
					  	</li>
					  </ul>
					</nav>
				</div>
				<div class="img-container">
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
			</div>
		);
	}

}

export default GameContainer;