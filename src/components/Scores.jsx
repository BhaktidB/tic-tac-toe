import React from 'react'
import styles from '../styles/components/Scores.module.css'

const Scores = ({youScore,tieScore,compScore}) => {
    return (
        <>
                <span className={styles.span1}><p>X (YOU)</p><p className={styles.updateScoreX}>{youScore}</p></span>
                <span className={styles.span2}><p>TIES</p><p className={styles.updateScoreTie}>{tieScore}</p></span>
                <span className={styles.span3}><p>O (CPU)</p><p className={styles.updateScore0}>{compScore}</p></span>

        </>
    )
}

export default Scores