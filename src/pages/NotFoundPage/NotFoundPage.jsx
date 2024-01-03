import React from 'react'
import img from './img/not-found.png'
import styles from './NotFoundPage.module.css'
import { useLocation } from 'react-router-dom'

export default function NotFoundPage() {
    let location = useLocation();

  return (
    <div>
      <img className={styles.img} src={img} alt=''/>
      <p className={styles.text}>No match for <u></u>{location.pathname}</p>
    </div>
  )
}
