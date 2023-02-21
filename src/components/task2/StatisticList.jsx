import { Statistic } from './Statistics';
import { StatsList } from './Statistics.module';
import PropTypes from 'prop-types';

export const StatisticList = ({title, data}) => {
    return (
    <section>
        <h2>{title}</h2>
  
        <StatsList>
            {data.map(({id, label, percentage}) => {
                return <Statistic key={id} label={label} percentage={percentage}/>
            })}
        </StatsList>
    </section>)
} 

StatisticList.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number
    }))
}