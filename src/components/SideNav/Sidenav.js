import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { 
    FiLayers, 
    FiUser, 
    FiBriefcase, 
    FiCalendar,
    FiSettings,
    FiEye,
    FiMessageCircle,
    FiCodesandbox,
    FiMinimize2
} from 'react-icons/fi';

import './styles.css';

export default function Sidenav() {

    const [clicked, setClicked] = useState(false);
    const expanded = !clicked ? "menu" : "menu expanded";

    function menuToggle() {
        setClicked(!clicked);

        let app = document.querySelector('.app');
        if(!clicked) {
            app.classList.add("expanded");
        } else {
            app.classList.remove("expanded");
        }
    }
    
    return (

        <nav className={expanded}>
            <h1 className="menu__title"><span className="menu__title-contrast"><FiCodesandbox /> Frontend</span> project</h1>
            <div className="menu__expand" onClick={menuToggle}>
                <FiMinimize2 size={20} color="#fff" />
            </div>
            
            <ul className="menu__list">
                <li className="menu__list-item"><Link className="menu__list-link" to="/dashboard"><FiLayers /> Dashboard</Link></li>
                <li className="menu__list-item"><Link className="menu__list-link" to="/"><FiUser /> Users</Link></li>
                <li className="menu__list-item"><Link className="menu__list-link" to="/"><FiBriefcase /> Projects</Link></li>
                <li className="menu__list-item"><Link className="menu__list-link active" to="/events"><FiCalendar /> Events</Link></li>
                <li className="menu__list-item"><Link className="menu__list-link" to="/"><FiSettings /> Preferences</Link></li>
                <li className="menu__list-item"><Link className="menu__list-link" to="/"><FiEye /> Feedback</Link></li>
                <li className="menu__list-item"><Link className="menu__list-link" to="/"><FiMessageCircle /> Suggestions</Link></li>
            </ul>
        </nav>
    )
}
