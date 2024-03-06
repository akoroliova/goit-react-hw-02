import css from './Feedback.module.css';

const Feedback = ({
  numberOfGood,
  numberOfNeutral,
  numberOfBad,
  totalFeedback,
  totalGoodPercentage,
}) => {
  return (
    <div className={css.feedbackContainer}>
      <p className={css.feedbackCounterText}>Good: {numberOfGood}</p>
      <p className={css.feedbackCounterText}>Neutral: {numberOfNeutral}</p>
      <p className={css.feedbackCounterText}>Bad: {numberOfBad}</p>
      <p className={css.feedbackCounterText}>Total: {totalFeedback}</p>
      <p className={css.feedbackCounterText}>
        Positive: {totalGoodPercentage}%
      </p>
    </div>
  );
};
export default Feedback;
