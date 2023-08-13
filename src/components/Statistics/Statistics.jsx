import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistic.module.css'

const Statisytics = ({ good, neutral, bad, total, positivePercentage = 0 }) => {
  return (
    <div className={styles.statWrapper}>
        <li>
          <p>Good: {good} </p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
      <p>Total: {total}</p>
      <p>
        Positive feedback:
        {positivePercentage}%
      </p>
    </div>
  );
};

Statisytics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statisytics;
