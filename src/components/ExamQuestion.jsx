import React, { Component } from "react";
import Question from "../data/questions.json";
import Display from "./Display";
import { Link } from "react-router-dom";
import Timer from "./Timer";

class ExamQuestion extends Component {
  state = {
    question: "",
    scores: 0,
    responses: 0,
    color: true,
  };

  componentDidMount() {
    this.setState({
      question: Question,
    });
  }
  renderList = (question, answers, correct) => {
    const answers = [answers];
    const color = this.state.color
      ? "btn btn-primary d-inline-block mb-2 m-2"
      : "btn btn btn-primary d-inline-block mb-2 m-2";
    return (
      <div>
        <div className="" key={question}>
          <h5>{question}</h5>
        </div>
        {answers.map((answer) => {
          return (
            <buttton
              className={color}
              key={answer}
              onClick={() => this.handleClick(answer, correct)}
            >
              {answer}
            </buttton>
          );
        })}
      </div>
    );
  };
  handleClick = (answer, correct) => {
    let score = this.state.scores;
    if (answer === correct) {
      score += 1;
      this.setState({
        scores: score,
      });
    }
    console.log(this.state.scores);
    this.setState({
      responses: this.state.responses < 25 ? this.state.responses + 1 : 25,
    });
  };

  render() {
    return (
      <div className="container">
        <Timer />
        <div className="m-4 bg-success text-center text-white">
          <h2>Test of Knowledge</h2>
          <h4>Select the right answer from the options below</h4>
        </div>
        <div>
          {this.state.question &&
            this.state.responses < 25 &&
            this.state.question.map(({ question, answers, correct }) =>
              this.renderList(question, answers, correct)
            )}
        </div>
        <Link to="/submit">
          <button>Submit</button>
        </Link>
        {this.state.responses === 25 ? (
          <Display total={this.state.scores} length={this.state.responses} />
        ) : null}
      </div>
    );
  }
}

export default ExamQuestion;
