import React from 'react'
import styles from '../styles/components/Logo.module.css';


const Logo = ({ additionalStyles }) => {
  const additionalLogoStyles = {
    ...additionalStyles
  }
  return (
    <img src="/svgs/logo.svg" alt="xo" style={additionalLogoStyles} className={styles.limg} />
  )
}

export default Logo