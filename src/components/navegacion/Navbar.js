import React, { useContext } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import logoutSound from '../../sounds/logout.mp3'; 
import { types } from '../../types/types';

export const Navbar = () => {
    
    const navigate = useNavigate();
    const {user, dispatch} = useContext(AuthContext);

    const handleLogout = () =>{
        
        dispatch({type: types.logout})

        new Audio(logoutSound).play()
        navigate('/login',{
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-collapse navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Home
            </Link>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>{user.name}</span>
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