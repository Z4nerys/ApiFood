import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import logoutSound from '../../sounds/logout.mp3'; 

export const Navbar = () => {
    
    const navigate = useNavigate();

    const handleLogout = () =>{
        new Audio(logoutSound).play()
        navigate('/login',{
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Home
            </Link>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>Gasty</span>
                    <button 
                        className="nav-item nav-link btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}