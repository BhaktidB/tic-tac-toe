import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from '../styles/components/NextBtn.module.css'
import OnRefresh from './OnRefresh';


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