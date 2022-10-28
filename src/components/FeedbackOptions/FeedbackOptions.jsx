import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(options)
  return <ul>
    {options.map(key => {
      return <li key={key}><button type="button" name={key} onClick={onLeaveFeedback}>{key}</button></li>
    })}
        </ul>
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
}