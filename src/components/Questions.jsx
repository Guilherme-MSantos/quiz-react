import React, { useContext } from "react";
import { QuizContext } from "../context/quiz";

const Questions = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="question">
      <p>Pergunta 0 de 10</p>
      <h2>Pergunta atual</h2>
      <div id="options-container">
        <p>Opções</p>
      </div>
      <button>Continuar</button>
    </div>
  );
};

export default Questions;
