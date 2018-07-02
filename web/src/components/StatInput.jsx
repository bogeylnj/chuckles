import React, { Component } from 'react';

class StatInput extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		  <label htmlFor={this.props.stat}>
			{this.props.stat + " "}
			<input type="number" id={this.props.stat} name={this.props.stat} max="10000000000" style={{width: '92px'}}/>
		  </label>
		);
	}
}

export default StatInput;