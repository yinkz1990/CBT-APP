import React, { useState } from "react";

const QuestionBox = ({ question, options, selected }) => {
  const [answers, setAnswer] = useState(options);
  return (
    <div className="mt-4 border-bottom ml-4">
      <div className="">
        <h4>{question}</h4>
      </div>
      {answers.map((answer) => {
        return (
          <button
            key={answer}
            className="btn btn-primary m-2"
            onClick={() => {
              setAnswer([answer]);
              selected(answer);
            }}
          >
            {answer}
          </button>
        );
      })}
    </div>
  );
};

export default QuestionBox;
