import React, { useState, useEffect } from 'react'
import styles from '../styles/components/Buttons.module.css'

const Buttons = ({ index, tile, onClickHandler }) => {


  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    if (tile === 'O') {
      setBackgroundImage('url("/public/svgs/O.svg")');

    } else if (tile === 'X') {
      setBackgroundImage('url("/public/svgs/X.svg")');

    }
  }, [tile]);

  const handleButtonClick = () => {
    onClickHandler(index);
  };

  return (
    <button className={styles.box} onClick={handleButtonClick} style={{ backgroundImage }}>{tile}</button>
  )
}

export default Buttons