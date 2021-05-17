import React, { useState } from "react";
import { Card } from "react-bootstrap";

type flashCardPropMental = {
  cardAns: string | number;
  cardQuest: string;
};

const Mental: React.FC<flashCardPropMental> = ({ cardAns, cardQuest }) => {
  const [show, setShow] = useState(true);

  return (
    <>
      {show ? (
        <div>
          <Card
            bg="danger"
            border="danger"
            style={{ width: "30rem" }}
            id="close-button"
            //className="btn btn-dark"
            onClick={() => setShow(false)}
          >
            <Card.Body>Questions : {cardQuest}</Card.Body>
          </Card>
        </div>
      ) : (
        <div>
          <Card
            border="success"
            bg="success"
            style={{ width: "30rem" }}
            onClick={() => setShow(true)}
            //className="btn btn-dark m-2"
          >
            <Card.Body>Reponse : {cardAns}</Card.Body>
          </Card>
        </div>
      )}
    </>
  );
};

export default Mental;
