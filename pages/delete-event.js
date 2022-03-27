import React, {useState} from 'react'
import {useUserContext} from '../contexts/ContextProvider'
import {useRouter} from 'next/router';
import styles from '../styles/Delete.module.css'
import {AiFillDelete} from 'react-icons/ai';

function deleteEvent() {
    const {userInfo, updateUserInfo} = useUserContext();
    const router = useRouter();
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e)
        const deletedEvent = e.target.value;
        const newEvents = userInfo.events.filter(event => (event.name !== deletedEvent))
        updateUserInfo({events: newEvents})
        router.push("/")
    }
    return (
        <div className={styles.listContainer}>
            <div className={styles.listHeading}>Upcoming Events</div>       
            {userInfo.events.map(event => (
                <div className={styles.listItem}>
                    <div className={styles.itemContent}>
                        <div className={styles.itemHeading}>{event.name}</div>    
                        <div className={styles.itemSubHeading}>{event.venue} @ {event.time} {event.date}</div>           
                    </div>
                    <div className={styles.deleteButtonContainer}>
                        <button className={styles.deleteButton} value={event.name} onClick={(e) => handleSubmit(e)}>X</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default deleteEvent