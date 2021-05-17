import React, { useEffect, useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

type flashCardPropChoice = {
  cardAnsChoice: string | number;
  cardQuestChoice: string;
};
const Choice: React.FC<flashCardPropChoice> = ({
  cardAnsChoice,
  cardQuestChoice,
}) => {
  return (
    <>
      <div>{cardQuestChoice}</div>
      <div>
        <InputGroup className="mb-2">
          <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <FormControl aria-label="Text input with checkbox" />
          </InputGroup.Prepend>
        </InputGroup>
        <InputGroup className="mb-2">
          <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <FormControl aria-label="Text input with checkbox" />
          </InputGroup.Prepend>
        </InputGroup>
        <InputGroup className="mb-2">
          <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <FormControl aria-label="Text input with checkbox" />
          </InputGroup.Prepend>
        </InputGroup>
      </div>
    </>
  );
};

export default Choice;
