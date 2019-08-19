import React from 'react'
import './Main.css'
import Logo from '../assets/logo.svg'


function Main({ match }) {
    return(
    
    <div className="main-container">
        <img src={ Logo } alt="tindev" />
        <ul>
            <li>
                <img src="https://avatars1.githubusercontent.com/u/1665576?v=4" alt="celso" />
                <footer>
                    <strong> Programador </strong>
                    <p>Programador ....</p>

                </footer>
                <div className="buttons">
                    <button type="button">like
                    </button>
                    <button type="button">Dislike
                    </button>
                </div>
                
            </li>
            <li>
                <img src="https://avatars1.githubusercontent.com/u/1665576?v=4" alt="celso" />
                <footer>
                    <strong> Programador </strong>
                    <p>Programador ....</p>

                </footer>
                <div className="buttons">
                    <button type="button">like
                    </button>
                    <button type="button">Dislike
                    </button>
                </div>
            </li>
            <li>
                <img src="https://avatars1.githubusercontent.com/u/1665576?v=4" alt="celso" />
                <footer>
                    <strong> Programador </strong>
                    <p>Programador ....</p>

                </footer>
                <div className="buttons">
                    <button type="button">like
                    </button>
                    <button type="button">Dislike
                    </button>
                </div>
            </li>
        </ul>
     </div>
    )
}

export default Main