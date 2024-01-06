import styles from '../styles/components/Quotes.module.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const baseURL = 'https://api.adviceslip.com/advice';

const Quotes = () => {

  const [advice, setAdvice] = useState('It is better to fail in originality than to succeed in imitation');
  const getApi = async () => {
    try {
      const res = await axios.get(baseURL);
      const adviceText = res.data.slip.advice;
      setAdvice(adviceText);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    setInterval(async () => {
      try {
        await getApi();
        console.log('Fetched data');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }, 60000);
  }, [advice])


  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Quote #1</h3>
      <h3 className={styles.quotes}>{advice}</h3>
      <img src="/svgs/quotesBtn.svg" alt="quotes button" />
    </div>
  )
}

export default Quotes