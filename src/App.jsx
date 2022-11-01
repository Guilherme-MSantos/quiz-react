import { useContext, useEffect } from "react";
import "./App.css";
import GameOver from "./components/GameOver";
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
      {/* {quizState.gameStage === "Category" && <PickCategory />} */}
      {quizState.gameStage === "Playing" && <Questions />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
