import{StatisticsTitle,
       StatisticsScore} from './Statistics.styled';

export const Statistics = ({good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage})=>{
      
return(
    <div>
        <StatisticsTitle>
            Statistics
        </StatisticsTitle>
        <StatisticsScore>
           <p>Good: {good}</p>
           <p>Neutral: {neutral}</p>
           <p>Bad: {bad}</p>  
           <p>Total: {countTotalFeedback}</p> 
           <p>Positive feedback: {countPositiveFeedbackPercentage}%</p>
        </StatisticsScore>
        
    </div>
)
}