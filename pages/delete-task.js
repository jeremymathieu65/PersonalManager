import React, {useState} from 'react'
import {useUserContext} from '../contexts/ContextProvider'
import {useRouter} from 'next/router';
import styles from '../styles/Delete.module.css'
import {AiFillDelete} from 'react-icons/ai';

function deleteTask() {
    const {userInfo, updateUserInfo} = useUserContext();
    const router = useRouter();
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e)
        const deletedTask = e.target.value;
        const newTasks = userInfo.toDoList.filter(task => (task.task !== deletedTask))
        updateUserInfo({toDoList: newTasks})
        router.push("/")
    }
    return (
        <div className={styles.listContainer}>
            <div className={styles.listHeading}>Upcoming Tasks</div>       
            {userInfo.toDoList.map(task => (
                <div className={styles.listItem}>
                    <div className={styles.itemContent}>
                        <div className={styles.itemHeading}>{task.task}</div>      
                    </div>
                    <div className={styles.deleteButtonContainer}>
                        <button className={styles.deleteButton} value={task.task} onClick={(e) => handleSubmit(e)}>X</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default deleteTask