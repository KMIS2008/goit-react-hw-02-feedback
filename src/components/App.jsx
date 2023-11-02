import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { FeedbackOptions } from './FeedbackOptions';
import {Statistics} from './Statistics';

export class App extends Component {
  state = {
    good: 2,
    neutral: 3,
    bad: 1
  }

   countTotalFeedback = ({good, neutral, bad})=>good + neutral + bad;
   countPositiveFeedbackPercentage = ({good, neutral, bad})=> {return Math.round((good*100)/(good + neutral + bad))};

  render(){
    const {good, neutral, bad} = this.state;
  return (
    <div>
     <FeedbackOptions/>
     <Statistics good = {good} 
                 neutral = {neutral} 
                 bad = {bad}
                 countTotalFeedback = {this.countTotalFeedback({good, neutral, bad})}
                 countPositiveFeedbackPercentage = {this.countPositiveFeedbackPercentage({good, neutral, bad})} />
      <GlobalStyle/>
    </div>
  );
  }
};
