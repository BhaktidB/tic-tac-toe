import React, { useState,useEffect } from 'react'
import Logo from '../components/Logo';
import styles from '../styles/pages/Game.module.css'
import TurnBtn from '../components/TurnBtn';
import Scores from '../components/Scores';
import RefreshBtn from '../components/RefreshBtn';
import GameOver from '../components/GameOver';
import OnRefresh from '../components/OnRefresh';
import GameContainerLogic from '../components/GameContainerLogic';


const Game = () => {

  const [isVisibleRefresh, setIsVisibleRefresh] = useState(false);

  const handleRefresh=()=>{
  
      setIsVisibleRefresh(true)
  }

  return (
    <>
      {/* <Quotes /> */}
      <div className={styles.container}>
        <div className={styles.gameDisplay}>


          <div className={styles.arrange}>
            <Logo />
            <TurnBtn />
            <RefreshBtn handleRefresh={handleRefresh}/>
          </div>
          <GameContainerLogic />
          {/* score updater */}
          

          {/* {showGameOverComp && <GameOver />} */}
          {isVisibleRefresh && <OnRefresh />}

        </div>
      </div>
    </>
  )
}

export default Game