import styles from '../styles/Home.module.css'
import 'react-calendar/dist/Calendar.css';
import {Calendar} from 'react-calendar'
import Events from '../components/Events';
import ToDoList from '../components/ToDoList';
import Diet from '../components/Diet';
import { useUserContext } from '../contexts/ContextProvider';
import {useEffect} from 'react'



export default function Home({events, toDoList, diet}) {
  
  const {userInfo, updateUserInfo} = useUserContext();
  console.log(userInfo)
  useEffect(() => {
    if(!userInfo.loaded)
      updateUserInfo({events, toDoList, diet, loaded: true})
      console.log(userInfo)
  }, [])
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.eventsTasksContainer}>
        <div className={styles.eventsPane}>
          <div className={styles.paneHeading}>Upcoming Events</div>
          <Events events={userInfo.loaded ? userInfo.events : events} />
        </div>
        <div className={styles.toDoPane}>
          <div className={styles.paneHeading}>To - Do List</div>
          <ToDoList tasks={userInfo.loaded ? userInfo.toDoList : toDoList } />
        </div>
      </div>
      <div className={styles.calendarDietWrapper}>
        <div className={styles.dietPane}>
          <div className={styles.paneHeading}>Diet</div>
          <Diet diet={userInfo.loaded ? userInfo.diet : diet} />
        </div>
        <div className={styles.calendarContainer}>
          <Calendar />
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  let res = await fetch("http:localhost:3000/api/events")
  const events = await res.json()
  res = await fetch("http://localhost:3000/api/tasks")
  const toDoList = await res.json()
  res = await fetch("http://localhost:3000/api/diet")
  const diet = await res.json();
  return {
    props: {
      events,
      toDoList,
      diet
    }
  }
}
