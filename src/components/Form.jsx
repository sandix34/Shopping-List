import React, { Component } from 'react';
import '../style.css';


class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			quantity: 0
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
		this.props.addArticle(this.state);
		// après soumission du formulaire on vide le formulaire
		this.setState({ name:"", quantity:0 })	
	}

	render() {
		return (
			<div>
				<h3>{this.props.formTitle}</h3>
				<form onSubmit={this.handleSubmit}>
					<input className="quantity" type="number" placeholder="quantité" value={this.state.quantity} 
					onChange={(event) => this.setState({quantity: event.target.value})}/>

					<input className="text" type="text" placeholder="article" value={this.state.name} 
					onChange={(event) => this.setState({name: event.target.value})}/>

					<button type="submit" className="btn btn-success">ajouter</button>
				</form>
			</div>
		);
	}
}

export default Form;