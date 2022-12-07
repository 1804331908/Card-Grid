import React from "react";
import styles from './Story.module.css';
import { HiFilter } from 'react-icons/hi';


function Story() {
  return (
    <div>
      <div className={styles.latestPost}>
        Latest Posts
      </div>
      <div>
        {/* <i style="color: #0084ff; margin-top: 18px" className="fas fa-filter"></i> */}
        <HiFilter style={{color: "#0084ff"}}/>
        <p className={styles.filter}>
          Filter by category
        </p>
      </div>
      <div className={styles.items}>
        <div className={styles.content}>All</div>
        <div className={styles.content}>Artificial Intelligence</div>
        <div className={styles.content}>Cloud Computing</div>
        <div className={styles.content}>DevOps</div>
        <div className={styles.content}>Programming Languages</div>
        <div className={styles.content}>Mobile Application Development</div>
        <div className={styles.content}>Technology and Tools</div>
        <div className={styles.content}>Get a Job in a Tech Company</div>
        <div className={styles.content}>Others</div>
      </div>
    </div>
  );
}

export default Story;