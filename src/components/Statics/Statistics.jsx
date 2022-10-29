import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return <ul className={css.list}>
    <li className={css.item}><span className={css.title} >Good:</span><span className={css.value}>{good}</span></li>
  <li className={css.item}><span className={css.title}>Neutral:</span><span className={css.value}>{neutral}</span></li>
  <li className={css.item}><span className={css.title}>Bad:</span><span className={css.value}>{bad}</span></li>
  <li className={css.item}><span className={css.title}>Total:</span><span className={css.value}>{total}</span></li>
  <li className={css.item}><span className={css.title}>PositiveFeedback:</span><span className={css.value}>{positivePercentage}%</span></li>
</ul>
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
}