import React, { useState } from 'react'
import styles from '../styles/components/Buttons.module.css'

const Buttons = ({ index, tile,onClickHandler }) => {

    const show0 = {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: '10vmin',
        backgroundImage: "url('/svgs/O.svg')" 
      };
    
      const showX = {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: '10vmin',
        backgroundImage: "url('/svgs/X.svg')" 
      };

      const handleButtonClick = () => {
        onClickHandler(index);
      };

  return (
<button className={styles.box} onClick={handleButtonClick}>{tile}</button>
  )
}

export default Buttons