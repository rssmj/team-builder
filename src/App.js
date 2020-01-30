import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [team, setTeam] = useState();
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
			</header>
		</div>
	);
}

export default App;
