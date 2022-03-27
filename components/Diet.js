import React from 'react'
import styles from '../styles/Home.module.css'

function Diet({diet}) {
  return (
      <>
        {diet.map(item => (
            <div className={styles.dietItem}>
                <div className={styles.mealType}>{item.meal}</div>
                <div className={styles.mealContent}>{item.contents}</div>
                <div className={styles.mealCalories}>{item.calories} Calories</div>
            </div>
        ))}
      </>
  )
}

export default Diet