
import React from 'react'
import { FaFilter } from "react-icons/fa";
import Card from '../Card/card';
import styles from '../filter/Filter.module.css'

function Filter() {
  const array0fObject = [
    {
    name:'Fresh Graduate or IT professional Looking for a',
    instructor: 'Arman Ahmed',
    date:'5 jul',
    year:'2019',
    discription : 'If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to assess technology',
    Imagelink: 'https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg'
  },
  {
    name:'Introducing you all to EdYoda - www.edyoda.com',
    instructor: 'Arman Ahmed',
    date:'5 jul',
    year:'2019',
    discription : 'Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of.',
    Imagelink: 'https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg'
    
  },
  {
    name:'From identity crisis to the Success Story - The',
    instructor: 'Kalyan Mahalingam',
    date:'5 jul',
    year:'2019',
    discription : 'DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations. It is becoming the de-facto component in',
    Imagelink: 'https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg'
    
  },
  {
    name:'Typical day of Data Scientist - An insider story!',
    instructor: 'Saurav Ghosh',
    date:'5 jul',
    year:'2019',
    discription : 'I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right - “ Big Data and Data Science are the foundation of all the trends that are emerging in the world',
    Imagelink: 'https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg'
    
  },
  {
    name:'edYoda Meetup #01 : A Date with Cloud',
    instructor: 'Ashish Pandey',
    date:'5 jul',
    year:'2019',
    discription : 'I recently had the opportunity to lead the initiative to organize the first Cloud meetup for edYoda. Here, I recount my experience in organizing the very first in the series of meetups planned by',
    Imagelink: 'https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg'
    
  },
  {
    name:'Industry 4.0 - The Prospects &amp; Journey ahead!',
    instructor: 'Pitanjal Dutta',
    date:'5 jul',
    year:'2019',
    discription : 'Did you ever dream a world where computers are connected and will communicate with one another to ultimately make decisions without human involvement?',
    Imagelink: 'https://edyoda.s3.amazonaws.com/media/blog-images/pitanjal-industry-4-image-1.jpg'
    
  }

]
  return (
    <div className={styles.filter_div}>
        <div className={styles.latest}>
            <h3>Latest Posts</h3>
        </div>
        <div className={styles.fa_filter}>  
                <p><span><FaFilter /></span> Filter by Category</p>          
        </div>
        <div className={styles.variety}>
           <p id='p_imp'>All</p>
           <p>Artificial Intelligence</p>
           <p>Cloud Computing</p>
           <p>DevOps</p>
           <p>Programming Languages</p>
           <p>Mobile Application Development</p>
           <p>Technology and Tools</p>
           <p>Get a Job in a Tech Company</p>
           <p>Others</p>
        </div>
        <div className={styles.our_grid}>
        {
          array0fObject.map((item) => {
            return <Card item = {item} />
          })
        }
        
         
        </div>
        
    </div>
  )
}

export default Filter

