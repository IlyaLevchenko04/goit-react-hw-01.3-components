import { TransactionItem } from './TransactionHistory ';
import PropTypes from 'prop-types';

export const TransactionsList = ({data}) => {
    return (
        <table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {data.map(({id, type, amount, currency}) => {
        return <TransactionItem key={id} type={type} amount={amount} currency={currency}/>
    })}
  </tbody>
</table>
    )
}

TransactionsList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
}