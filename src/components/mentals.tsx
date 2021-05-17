import React, { useEffect, useState } from "react";
import { Flashcard } from "../types/quest";
import Mental from "../components/mentalflashcard";

type MentalsProps = {
  mentalFlashcard: Flashcard[];
};

const Mentals: React.FC<MentalsProps> = ({ mentalFlashcard }) => {
  return (
    <>
      {mentalFlashcard.map((flashcard) => {
        return (
          <>
            <Mental
              cardAns={flashcard.correct_answer}
              cardQuest={flashcard.question}
            />
          </>
        );
      })}
    </>
  );
};

export default Mentals;
