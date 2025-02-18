import React, { useEffect, useState }from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'
import './Main.css'
import Logo from '../assets/logo.svg'

function Main({ match }) {
	const [users, setUsers] = useState([])
	// dependencias dos useEffect
	useEffect(() =>{
	async function loadUsers() {
		const response = await api.get('/devs', {
			headers: { 
					user: match.params.id,
				}
		})
		setUsers(response.data)
	}

	loadUsers()
	}, [match.params.id])

	async function handleLike(id) {
		await api.post(`/devs/${id}/likes`, null, {
			headers: {user: match.params.id}, 
		})
	
		setUsers(users.filter(user => user._id != id))
	}

	async function handleDislike(id) {
		await api.post(`/devs/${id}/dislike`, null, {
			headers: {user: match.params.id}, 
		})

		setUsers(users.filter(user => user._id != id))
	}
	return(
		<div className="main-container">
			<Link to="/">
				<img src={ Logo } alt="tindev"/>
			</Link>
			{users.length > 0 ? (
				<ul>
				{users.map( user => (
				<li key={user._id}>
					<img src={user.avatar} alt={user.name} />
					<footer>
						<strong> {user.name} </strong>
						<p>{user.bio}</p>
					</footer>
					<div className="buttons">
						<button type="button" onClick={() => handleLike(user._id)}>like
						</button>
						<button type="button"  onClick={() => handleDislike(user._id)}>Dislike
						</button>
					</div>			
				</li>
		))}	
		</ul>
			) : <div className="empty">Acabou :( </div>}	
		</div>
	)
}
export default Main