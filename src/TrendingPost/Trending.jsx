import React from 'react'
import styles from '../TrendingPost/Trending.module.css'

function Trending() {
  return (
    <div className={styles.trend_post}>
        <div className={styles.front_img}>
            <h1>Trending Posts</h1>
            <div className={styles.img}>
            <img src="https://edyoda.s3.amazonaws.com/media/blog-images/ace-soft-skills-small.jpg" alt="error" />
            </div>    
       </div>
        <div className={styles.another_trend}>
            <div className={styles.f1}>
                <img src="https://edyoda.s3.amazonaws.com/media/blog-images/aptitude-small.jpg" alt="error" />

            </div>
            <div className={styles.f2}>
                <img src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_cloud_computing.jpeg" alt="error" />
            </div>
        </div>     
    </div>
   
   
       
    
  
  )
}

export default Trending
