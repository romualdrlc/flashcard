import React, { useState } from "react";
import { Flashcard } from "../types/quest";
import Input from "../components/inputflashcards";

type InputProps = {
  inputFlashcard: Flashcard[];
};

const Inputs: React.FC<InputProps> = ({ inputFlashcard }) => {
  return (
    <>
      {inputFlashcard.map((flashcard) => {
        return (
          <>
            <Input
              cardAns={flashcard.correct_answer}
              cardQuest={flashcard.question}
            />
          </>
        );
      })}
    </>
  );
};

export default Inputs;
