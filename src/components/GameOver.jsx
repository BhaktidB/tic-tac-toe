import React from 'react'
import styles from '../styles/components/GameOver.module.css'
import QuitBtn from './QuitBtn'
import NextBtn from './NextBtn'

const GameOver = () => {

    return (
        <>
        
            <span className={styles.blackScreen}></span>
            <div className={styles.board}>

                <p className={styles.victor}>YOU WON!</p>
                <span className={styles.victorSpan}>
                    <img className={styles.victorImage} src="/svgs/win.svg" alt="victor" />
                    <p className={styles.winner}>TAKES THE ROUND</p>
                </span>
                <span className={styles.victorSpan}>
                    {/* quit butn */}
                    <QuitBtn />
                    {/* next */}
                    <NextBtn text={'NEXT ROUND'} />
                </span>
            </div>

        </>
    )
}

export default GameOver