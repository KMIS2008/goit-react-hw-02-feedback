import{StatisticsTitle,
       StatisticsScore} from './Statistics.styled';

export const Statistics = ()=>{
return(
    <div>
        <StatisticsTitle>
            Statistics
        </StatisticsTitle>
        <StatisticsScore>
           <p>Good: 3</p>
           <p>Neutral: 2</p>
           <p>Bad: 2</p>   
        </StatisticsScore>
        
    </div>
)
}