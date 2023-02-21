import { StatsItem } from './Statistics.module'

export const Statistic = ({ label, percentage}) => {  
    return <StatsItem>
        <span>{label}</span>
        <span>{percentage}%</span>
    </StatsItem>
}