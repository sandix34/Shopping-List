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
        this.setState({ isInEditMode: !this.state.isInEditMode});
    }


    render() {
        return (
            <div>
                <button className="btn btn-warning btn-xs edit" onClick={ this.toggleEditMode} >modif</button>
                {this.props.data.quantity} {this.props.data.name}
            </div>
        );
    }
}

export default Article;

