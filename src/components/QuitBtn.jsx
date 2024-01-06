import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from '../styles/components/QuitBtn.module.css'

const QuitBtn = () => {
    const navigate = useNavigate();

    const redirectToPage = () => {
        navigate('/');
    };

    return (
        <>
            <button className={styles.quitBtn} onClick={redirectToPage}>QUIT</button>

        </>
    )
}

export default QuitBtn