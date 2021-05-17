import React, { useEffect, useState } from "react";
import { Flashcard } from "../types/quest";
import Choice from "../components/choiceflashcard";

type ChoiceProps = {
  listFlashcard: Flashcard[];
};

const Choices: React.FC<ChoiceProps> = ({ listFlashcard }) => {
  const [index, setIndex] = useState(0);
  const [card, setCard] = useState(listFlashcard[index]);

  return (
    <>
      {listFlashcard.map((flashcard) => {
        return (
          <>
            {/* <button
              onClick={() => {
                setIndex(index + 1);
                setCard(listFlashcard[index]);
              }} */}
            {/* > */}
            <Choice
              cardAnsChoice={flashcard.correct_answer}
              cardQuestChoice={flashcard.question}
            />
            {/* </button> */}
          </>
        );
      })}
    </>
  );
};

export default Choices;
