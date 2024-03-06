import { useState } from 'react';
import './App.css';
import Description from '../description/Description.jsx';
import Options from '../options/Options.jsx';
import Notification from './Notification/Notification.jsx';
import Feedback from '../feedback/Feedback.jsx';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    if (feedbackType === 'good') {
      setFeedback({
        ...feedback,
        good: feedback.good + 1,
      });
    } else if (feedbackType === 'neutral') {
      setFeedback({
        ...feedback,
        neutral: feedback.neutral + 1,
      });
    } else if (feedbackType === 'bad') {
      setFeedback({
        ...feedback,
        bad: feedback.bad + 1,
      });
    } else if (feedbackType === 'reset') {
      setFeedback({
        ...feedback,
        good: 0,
        neutral: 0,
        bad: 0,
      });
    }
  };

  const totalFeedback = Object.values(feedback).reduce(
    (sum, currentValue) => sum + currentValue,
    0
  );

  const totalGoodPercentage = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />

      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />

      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          numberOfGood={feedback.good}
          numberOfNeutral={feedback.neutral}
          numberOfBad={feedback.bad}
          totalFeedback={totalFeedback}
          totalGoodPercentage={totalGoodPercentage}
        />
      )}
    </>
  );
}

export default App;
