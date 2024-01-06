import React, { useEffect, useState } from 'react'
import styles from '../styles/components/OnRefresh.module.css'
import QuitBtn from './QuitBtn'
import NextBtn from './NextBtn'


const OnRefresh = () => {
  const [isVisible, setIsVisible] = useState(true);

const handleNextClick = () => {
    setIsVisible(false);
}



  return (
    <> {isVisible && (
      <>
          <span className={styles.blackScreen}></span>
          <div className={styles.board}>
              <span className={styles.victorSpan}>
                  <p className={styles.quitMessage}>Do you want to quit?</p>
              </span>
              <span className={styles.victorSpan}>
                  <NextBtn text={'PLAY AGAIN'} handleNextClick={handleNextClick} />
                  <QuitBtn />
              </span>
          </div>
      </>
  )}
   
    </>
    )
}

export default OnRefresh