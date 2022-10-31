import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import "./App.css";
import Questions from "./components/Questions";
import Welcome from "./components/Welcome";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>Quiz de programação </h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Questions />}
      <Welcome />
    </div>
  );
}

export default App;
