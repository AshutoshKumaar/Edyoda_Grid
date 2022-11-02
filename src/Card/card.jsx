import React from 'react'
import styles from '../Card/card.module.css'

function Card(props) {

    const {item} = props
  
  return (
    <div className={styles.Card_div}>
      <div className={styles.Card}>
        <div className={styles.IMG}>
          <img src= {item.Imagelink} alt="eroor" />
        </div>
        <div className={styles.details}>
          <h4>{item.name}</h4>
          <p><span>{item.instructor} |</span> {`${item.date}  ${item.year}`}</p>
          <p>{item.discription}</p>
        </div>
      </div>
       
    </div>
  )
}

export default Card
