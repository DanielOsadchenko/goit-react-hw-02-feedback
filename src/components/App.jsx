import React, { Component } from "react";
import { Statistics } from "./Statics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "components/Section/Section";
import { Notification } from "./Notification/Notification";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementReview = (e) => {
    this.setState((prevState) => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }))
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100);
  };


  render() {
    const { good, neutral, bad } = this.state;

    return <div style={{
      paddingTop: '60px',
      paddingBottom: '60px',
        fontSize: 20,
        color: '#010101',
      backgroundColor: "#e7ecf2",

      }}>

      <Section title='Please leave your feedback'>
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleIncrementReview}></FeedbackOptions>
      </Section>
      
      <Section title='Statistics'>

        {this.countTotalFeedback() > 0
          ? <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}>
          </Statistics>
          : <Notification message='There is no feedback' />}
        
      </Section>
        
    </div>;
  }
}
