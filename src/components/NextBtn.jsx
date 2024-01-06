import React, { useState } from 'react'
import styles from '../styles/components/NextBtn.module.css'

const NextBtn = ({ text,handleNextClick }) => {


    return (
        <>
                <button className={styles.nextRoundBtn} onClick={handleNextClick}>
                    {text}
                </button>
          
        </>
    )
}

export default NextBtn