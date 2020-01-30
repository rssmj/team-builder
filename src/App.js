import React, { useState } from 'react';
import Form from './components/Form';
import logo from './logo.svg';
import './App.css';

function App() {
	const [teams, setTeams] = useState([
		{
			id: 0,
			name: 'human',
			email: 'human@earth.com',
			role: 'web27'
		}
	]);
	const addNewMember = member => {
		const newMember = {
			id: Date.now(),
			name: member.name,
			email: member.email,
			role: member.role
		};
		setTeams([...teams, newMember]);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<h1>Team Builder</h1>
				<Form addNewMember={addNewMember} />
				<div className='teamMembers'>
					{teams.map(member => (
						<div className='member' key={member.id}>
							<h2>{member.name}</h2>
							<p>{member.email}</p>
							<p>{member.role}</p>
						</div>
					))}
				</div>
			</header>
		</div>
	);
}

export default App;
