import PropTypes from 'prop-types';
import css from './Section.module.css'


export const Section = ({ children, title }) => {
  return <section className={css.widgetSection}>
    <h2 className={css.title}>{title}</h2>
    {children}
  </section>
}

Section.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
}