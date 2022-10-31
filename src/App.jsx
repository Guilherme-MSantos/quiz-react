import { useContext, useEffect } from "react";
import "./App.css";
import Questions from "./components/Questions";
import Welcome from "./components/Welcome";
import { QuizContext } from "./context/quiz";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);
  return (
    <div className="App">
      <h1>Quiz de programação </h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Questions />}
    </div>
  );
}

export default App;
