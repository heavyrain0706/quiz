import React from "react";
import "./App.scss"
import Quiz from "./components/Quiz/Quiz";
import { dataContext } from "./context";
import { questions } from "./context/database";

const App = () => {

  return (
    <dataContext.Provider value={{
      geography: questions
    }}>
    <div className="wrapper">
      <Quiz/>
    </div>
    </dataContext.Provider>
  )
}

export default App;