import React from "react";

import "./App.css";
import Mentals from "../src/components/mentals";
import { question } from "./data/basequestion";
import Choices from "./components/choices";
import Input from "./components/inputs";

function App() {
  return (
    <>
      <div>
        <Mentals mentalFlashcard={question} />
      </div>
      <br></br>
      <div>
        <Input inputFlashcard={question} />
      </div>
      <br></br>
      <div>
        <Choices listFlashcard={question} />
      </div>
    </>
  );
}

export default App;
