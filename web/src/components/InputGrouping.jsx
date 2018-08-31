import React, { Component } from 'react';
import StatInput from './StatInput';

class InputGrouping extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		  <div>
			<h2>this.props.title</h2>
			<div>
			{
				this.props.stats.map(function(v, i) {
					return <StatInput key={i} stat={v} />
				})
			}
			</div>
		  </div>
		);
	}
}

export default StatInput;