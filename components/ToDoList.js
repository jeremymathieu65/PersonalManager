import React from 'react'
import styles from '../styles/Home.module.css'
import {useUserContext} from '../contexts/ContextProvider'


function ToDoList({tasks}) {
    const {userInfo, updateUserInfo} = useUserContext();
    function taskDone(e) {
        console.log(e)
        e.preventDefault();
        let currentTasks = userInfo.toDoList;
        currentTasks = currentTasks.map(task => (task.task === e.target.innerText ? {task: task.task, done: !task.done} : task))
        updateUserInfo({toDoList: currentTasks})
        e.target.style.backgroundColor === "green" ? e.target.style.backgroundColor = "whitesmoke" : e.target.style.backgroundColor = "green"
    }
  return (
        <>
            {tasks.map(task => (
                <div className={styles.taskItem} onDoubleClick={(e) => (taskDone(e))}>
                    <div className={styles.taskHeading}>{task.task}</div>
                </div>  
            ))}
        </>
    )
}

export default ToDoList