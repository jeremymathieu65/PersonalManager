import React from 'react'
import styles from '../styles/Home.module.css'

function Events({events}) {
  return (
      <>
        {events.map(event => (
            <div className={styles.eventItem}>
                <div className={styles.eventHeading}>{event.name}</div>
                <div className={styles.eventDateTime}>{event.date} {event.time}</div>
                <div className={styles.eventVenue}>{event.venue}</div>
                <div className={styles.eventDesc}>{event.description}</div>
            </div>
        ))}
      </>
    ) 
}

export default Events