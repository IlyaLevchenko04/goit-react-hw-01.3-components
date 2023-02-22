import { StatsItem } from './Statistics.module';
import PropTypes from 'prop-types';

export const Statistic = ({ label, percentage }) => {
  return (
    <StatsItem>
      <span>{label}</span>
      <span>{percentage}%</span>
    </StatsItem>
  );
};

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
