import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistoryTable}>
      <thead>
        <tr className={css.headerRow}>
          <th className={css.headerCell}>Type</th>
          <th className={css.headerCell}>Amount</th>
          <th className={css.headerCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(eachItem => {
          const { id, type = 'N/A', amount = 0, currency = 'N/A' } = eachItem; // Set default values for props
          return (
            <tr className={css.row} key={id}>
              <td className={css.dataCell}>{type}</td>
              <td className={css.dataCell}>{amount}</td>
              <td className={css.dataCell}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};

export default TransactionHistory;
