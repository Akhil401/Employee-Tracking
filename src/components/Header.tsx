import React from 'react';
import './header.css'

const Header = () => {
    return (
        <nav>
            <div className='header'>
                enGenome-Task
            </div>
            <div className='list'>
                <span>Dashboard</span>
                <span>Employees</span>
            </div>
        </nav>
    )
}

export default Header;