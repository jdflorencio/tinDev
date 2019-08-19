import React, { useState } from 'react'
import './Login.css'
import api from '../services/api'
import Logo from '../assets/logo.svg'

function Login({ history }) {
    const [username, setUsername]  = useState('')
    async function handleSubmit(e) {
        e.preventDefault();
        const response = await api.post('/devs', {
            username
        })
        console.log(response)
        const { _id } = response.data

        history.push(`/dev/${_id}`)
    }

    return(
        <div className="login-container">
        <form onSubmit={handleSubmit}>
            <img src={ Logo } alt="TinDev" />
            <input 
                placeholder="digite seu usúario no Github"
                value = {username}
                onChange={e => setUsername(e.target.value)}
            />
            <button type="submit">Enviar</button>
        </form>           
        </div>        
    ) 
}
export default Login