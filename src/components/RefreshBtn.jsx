import React, { useEffect } from 'react'
import styles from '../styles/components/RefreshBtn.module.css'


const RefreshBtn = ({handleRefresh}) => {
  
  return (<>
  <div>

    <img src="/svgs/refresh.svg" alt="refresh button" className={styles.rimg} onClick={handleRefresh} />
  </div>
  </>
  )
}

export default RefreshBtn