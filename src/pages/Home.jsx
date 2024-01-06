import React, { useState } from 'react'
import styles from '../styles/pages/Home.module.css';
import Quotes from '../components/Quotes';
import Logo from '../components/Logo';
import InviteBtn from '../components/InviteBtn';
import { Link } from 'react-router-dom';

const Home = () => {
  const [selectXBtnClicked, setSelectXBtnClicked] = useState(false);
  const [selectOBtnClicked, setSelectOBtnClicked] = useState(true);

  const handleXBtnClick = () => {
    setSelectXBtnClicked(true);
    setSelectOBtnClicked(false);
  };

  const handleOBtnClick = () => {
    setSelectXBtnClicked(false);
    setSelectOBtnClicked(true);
  };
  return (
    <>
      {/* <Quotes /> */}
      <div className={styles.container}>
        <div className={styles.gameDisplay}>
          <Logo />
          <div className={styles.pickPlayerDiv}>
            <p className={styles.pickp}>PICK PLAYER </p>
            <span>
              <button className={selectXBtnClicked ? styles.clicked : styles.unclicked}
                onClick={handleXBtnClick}>X</button>
              <button className={selectOBtnClicked ? styles.clicked : styles.unclicked}
                onClick={handleOBtnClick}>O</button>
            </span>

          </div>
          <Link to="/game"><button className={styles.vsComputer}>NEW GAME ( VS CPU )</button></Link>
          <button className={styles.vsHuman}>NEW GAME ( VS HUMAN ) Coming soon</button>
          <InviteBtn />
        </div>

      </div>
    </>
  )
}

export default Home