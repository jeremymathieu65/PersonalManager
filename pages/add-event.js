import React, {useState} from 'react'
import {useUserContext} from '../contexts/ContextProvider';
import {useRouter} from 'next/router';
import styles from '../styles/Add.module.css'


function addEvent() {
    const {userInfo, updateUserInfo} = useUserContext()
    const router = useRouter()
    function handleSubmit(e) {
        e.preventDefault();
        const newEvent = {
            name: eventHeadline,
            venue: eventVenue,
            date: eventDate,
            time: eventTime, 
            description: eventDesc
        }
        const currentEvents = userInfo.events;
        currentEvents.push(newEvent)
        updateUserInfo({events: currentEvents});
        router.push("/")
    }

    const [eventHeadline, setEventHeadline] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventTime, setEventTime] = useState("");
    const [eventVenue, setEventVenue] = useState("");
    const [eventDesc, setEventDesc] = useState("");
  return (
      <div className={styles.formWrapper}>
        <form className={styles.formContainer}>
            <div className={styles.formItem}>
                <label className={styles.formLabel}>Enter event headline here </label>
                <input className={styles.formInput} type="text" onChange={(e) => (setEventHeadline(e.target.value))} />
            </div>

            <div className={styles.formItem}>
                <label className={styles.formLabel}>Enter event date here </label>
                <input className={styles.formInput} type="text" onChange={(e) => (setEventDate(e.target.value))} />
            </div>

            <div className={styles.formItem}>
                <label className={styles.formLabel}>Enter event time here </label>
                <input className={styles.formInput} type="text" onChange={(e) => (setEventTime(e.target.value))} />
            </div>

            <div className={styles.formItem}>
                <label className={styles.formLabel}>Enter event venue here </label>
                <input className={styles.formInput} type='text' onChange={(e) => (setEventVenue(e.target.value))} />
            </div>

            <div className={styles.formItem}>
                <label className={styles.formLabel}>Enter event description here</label>
                <input className={styles.formInput} type="text" onChange={(e) => (setEventDesc(e.target.value))} />
            </div>
            <button className={styles.formSubmit} onClick={(e) => (handleSubmit(e))}>Add</button>
        </form>
      </div>
  )
}

export default addEvent