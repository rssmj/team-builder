import React, { useState } from 'react';

const Form = props => {
	// console.log(props);
	const [team, setTeam] = useState({
		name: '',
		email: '',
		role: ''
	});

	const handleChanges = e => {
		setTeam({ ...team, [e.target.name]: e.target.value });
		console.log(team);
	};

	const submitForm = e => {
		e.preventDefault();
		props.addNewMember(team);
		setTeam({ name: '', email: '', role: '' });
	};

	return (
		<form className='formSubmit' onSubmit={submitForm}>
			<label> Name </label>
			<input
				type='text'
				name='name'
				onChange={handleChanges}
				value={team.name}
			/>
			<label> Email </label>
			<input
				type='email'
				name='email'
				onChange={handleChanges}
				value={team.email}
			/>
			<label> Role </label>
			<input
				type='text'
				name='role'
				onChange={handleChanges}
				value={team.role}
			/>
			<div>
				<button className='btn' type='submit'>
					{' '}
					Add Team Member{' '}
				</button>
			</div>
		</form>
	);
};

export default Form;
