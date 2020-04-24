import React from 'react'

import './styles.css'

import avatar from '../../assets/avatar.png'

export default function Header() {
    return (
        <header className="header">
            <div className="content-user">
                <p className="user__text">Hello John Dee</p>
                <img className="user__avatar" src={avatar} alt="avatar John Dee" />
            </div>
        </header>
    )
}
