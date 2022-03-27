import React, {useState} from 'react'
import styles from '../styles/Add.module.css'
import {useRouter} from 'next/router'
import {useUserContext} from '../contexts/ContextProvider';

function addTask() {
    const {userInfo, updateUserInfo} = useUserContext()
    const router = useRouter()
    function handleSubmit(e) {
        e.preventDefault();
        const newTask = {
            task: taskHeadline,
            done: false
        }
        const currentTasks = userInfo.toDoList;
        currentTasks.push(newTask)
        updateUserInfo({toDoList: currentTasks});
        router.push("/")
    }

    const [taskHeadline, setTaskHeadline] = useState("");
  return (
      <div className={styles.formWrapper}>
        <form className={styles.formContainer}>
            <div className={styles.formItem}>
                <label className={styles.formLabel}>Enter task description here </label>
                <input className={styles.formInput} type="text" onChange={(e) => (setTaskHeadline(e.target.value))} />
            </div>

            <button className={styles.formSubmit} onClick={(e) => (handleSubmit(e))}>Add</button>
        </form>
      </div>
  )
}

export default addTask