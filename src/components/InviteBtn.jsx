import React, { useState } from 'react'
import styles from '../styles/components/InviteBtn.module.css';


const InviteBtn = () => {

  const [isBtnVisible, setIsBtnVisible] = useState(false);
  const handleClick = () => {
    setIsBtnVisible(true)

    const fullUrl = window.location.href;
    navigator.clipboard.writeText(fullUrl);
  }


  return (
    <>
      <button className={styles.inviteBtn} onClick={handleClick}>Invite your friend</button>
      {isBtnVisible && (<button className={styles.inviteCopyBtn} >Invite link copied </button>)}

    </>
  )
}

export default InviteBtn