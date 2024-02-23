import './styles.module.css'
import React from 'react'

function Main() {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }
    return (
        <div className='main_container'>
            <nav className="navbar">
                <h1>facebook</h1>
                <button className='white-btn' onClick={handleLogout}>
                    Logout
                </button>
            </nav>
        </div>
    )
}

export default Main
