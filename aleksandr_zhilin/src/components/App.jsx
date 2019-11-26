import React, { Component } from 'react';

import { Messenger } from 'components/Messenger';

export class App extends Component {
	render() {
		return (
			<div className="container">
				<Messenger/>
			</div>
		);
	}
}
