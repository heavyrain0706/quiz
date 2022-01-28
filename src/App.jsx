import React, { useState } from "react";
import "./App.scss"
import Start from "./components/Start/Start";
import { dataContext } from "./context";
import { footballQuestions, geographyQuestions } from "./context/database";

const App = () => {

  const [start, setStart] = useState(false)

  return (
    <dataContext.Provider value={{
      geography: geographyQuestions,
      football: footballQuestions,
      start: start,
      setStart: setStart
    }}>
    <div className="wrapper">
      <Start/>
    </div>
    </dataContext.Provider>
  )
}

export default App;