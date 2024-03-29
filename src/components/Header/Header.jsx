import React from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className={styles.container}>
        <ul className={styles.list_container}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/people/?page=1">People</NavLink></li>
            <li><NavLink to="/not-found">Not Found</NavLink></li>
        </ul>
    </div>
  )
}
