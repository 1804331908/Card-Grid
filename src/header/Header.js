import React from "react";
import styles from './Header.module.css';
import { RiArrowDropDownLine } from 'react-icons/ri';

function Header() {
  return (
    <div>
      <div className={styles.HeaderDiv}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <div className={styles.edyoda}>EDYODA</div>
            <div>
              <i className={styles.stories}>Stories</i>
            </div>
          </div>
          <div className={styles.explore}>
            Explore Categories
            <div>
            <RiArrowDropDownLine style={{fontSize: "38px"}}/>
            </div>
          </div>
          <div className={styles.quoteDiv}>
            <p>EdYoda is free learning and knowledge sharing platform for techies</p>
          </div>
          <div className={styles.buttonDiv}>
            <button>Go To Main Website</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;