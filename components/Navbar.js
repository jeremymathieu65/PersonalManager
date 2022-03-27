import React from 'react'
import styles from '../styles/Base.module.css'
import Link from 'next/link'
import {AiFillCalendar} from 'react-icons/ai'

function Navbar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.navTitle}>
            <div className={styles.navLogo}><AiFillCalendar color='grey' size="50" /></div>
            <Link href="/">
                <div className={styles.navHeader}>Personal Manager</div>        
            </Link>
        </div>
        <div className={styles.navlink}>
            <Link href='/'>
                <a>Home</a>
            </Link>
        </div>

        <div className={styles.navlink}>
            <Link href='/add-event'>
                <a>Add New Event</a>
            </Link>
        </div>

        <div className={styles.navlink}>
            <Link href='/delete-event'>
                <a>Delete Event</a>
            </Link>
        </div>

        <div className={styles.navlink}>
            <Link href='/add-task'>
                <a>Add Task</a>
            </Link>
        </div>

        <div className={styles.navlink}>
            <Link href='/delete-task'>
                <a>Delete Task</a>
            </Link>
        </div>
    </div>
  )
}

export default Navbar