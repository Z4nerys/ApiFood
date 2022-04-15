import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import logoutSound from '../../sounds/logout.mp3';
import { types } from '../../types/types';

export const Navbar = () => {

    const navigate = useNavigate();
    const { user, dispatch } = useContext(AuthContext);

    const handleLogout = () => {

        dispatch({ type: types.logout })

        new Audio(logoutSound).play()
        navigate('/login', {
            replace: true
        })
    }

    return (
        <nav className="navbar bg-dark text-light">
            <div className="d-flex">
                <Link 
                    className="nav-link text-light" 
                    to="/home"
                >
                    Home
                </Link>
                <Link 
                    className="nav-link text-light" 
                    to="/search"
                >
                    Search
                </Link>
                <div className="d-flex">
                    <span className=' nav-link text-info'>{user.name}</span>
                    <button
                        className="nav-link btn text-light"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    )
}
