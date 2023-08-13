import React from 'react';
import PropTypes from 'prop-types';
import classes from './Feedback.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
      <div className={classes.appWrapper}>
        {options.map(option => (
        <li key={option}>
          <button type="button" onClick={() => onLeaveFeedback(option)} className={classes.buttons}>
            {option}
          </button>
        </li>
      ))}
      </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
