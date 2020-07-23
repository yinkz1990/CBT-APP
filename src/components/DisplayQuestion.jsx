import React, { Component } from "react";
import Question from "../data/questions.json";
import QuestionBox from "./Questionbox";
import Display from "./Display";
import Nav from "./Nav";
import Timer from "./Timer";
import { Link } from "react-router-dom";

class DisplayQuestion extends Component {
  state = {
    question: "",
    responses: 0,
    scores: 0,
  };

  componentDidMount() {
    this.setState({
      question: Question,
    });
  }
  handleClick = (answer, correct) => {
    if (answer === correct) {
      this.setState({
        scores: this.state.scores + 1,
      });
    }
    this.setState({
      responses: this.state.responses < 25 ? this.state.responses + 1 : 25,
    });
  };
  handleTime = () => {
    this.setState({ responses: 25 });
  };
  handleSubmit = () => {
    this.setState({
      scores: this.state.scores,
      responses: 25,
    });
  };
  playagain = () => {
    this.props.history.replace("/");
    this.setState({
      scores: 0,
      responses: 0,
    });
  };
  render() {
    const color = this.state.responses === 25 ? "d-none" : "btn btn-success";
    return (
      <div className="container-fluid bg-light">
        <Nav />
        <Timer examTime={this.handleTime} />
        {this.state.question &&
          this.state.responses < 25 &&
          this.state.question.map(({ question, answers, correct }) => (
            <QuestionBox
              question={question}
              key={question}
              options={answers}
              selected={(answer) => this.handleClick(answer, correct)}
            />
          ))}
        <div className="text-center my-5">
          <Link>
            <button className={color} onClick={this.handleSubmit}>
              Submit
            </button>
          </Link>
        </div>

        {this.state.responses === 25 ? (
          <Display
            total={this.state.scores}
            length={this.state.responses}
            playagain={this.playagain}
          />
        ) : null}
      </div>
    );
  }
}

export default DisplayQuestion;
