import React, { Component } from 'react';
import '../style.css';

class Article extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isInEditMode: false
		}
	}

	toggleEditMode = () => {
		this.setState({ isInEditMode: !this.state.isInEditMode });
	}

	handleQuantityEdit = (event, article) => {
		article.quantity = event.target.value;
		this.props.editArticle(article);

	}

	handleQNameEdit = (event, article) => {
		article.name = event.target.value;
		this.props.editArticle(article);
	}
	
	render() {
		return (
			<div>
				<button className="btn btn-warning btn-xs edit" onClick={this.toggleEditMode} >modif</button>

				{
					this.state.isInEditMode ?
						<span>
							<input
								type="number"
								value={this.props.data.quantity}
								onChange={(event) => this.handleQuantityEdit(event, this.props.data)}
							/>
							<input
								type="text"
								value={this.props.data.name}
								onChange={(event) => this.handleQNameEdit(event, this.props.data)}
							/>
						</span> :
						<span>{this.props.data.quantity} {this.props.data.name}</span>
				}
			</div>
		);
	}
}

export default Article;

