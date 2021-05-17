import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

type flashCardPropInput = {
  cardAns: string | number;
  cardQuest: string;
};
const Input: React.FC<flashCardPropInput> = ({ cardAns, cardQuest }) => {
  const [show, setShow] = useState<Boolean>(true);
  const [inputValue, setInputValue] = useState<string | number>();
  const [response, setResponse] = useState<Boolean>();

  useEffect(() => {
    if (inputValue === cardAns) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [show]);
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        Questions : {cardQuest}
        <input
          type="text"
          value={inputValue || ""}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button
          onClick={() => {
            show ? (
              <Card
                border="success"
                bg="success"
                style={{ width: "30rem" }}
                onClick={() => {
                  setShow(true);
                }}
              >
                <Card.Body>Reponse : {cardAns}</Card.Body>
              </Card>
            ) : (
              <Card
                border="success"
                bg="success"
                style={{ width: "30rem" }}
                onClick={() => setShow(true)}
              >
                <Card.Body>MAUVAISE REPONSE, TRY AGAIN</Card.Body>
              </Card>
            );
          }}
        >
          voir la reponse
        </button>
      </form>
    </>
  );
};

export default Input;
// {show ? (
//   <Card
//     bg="danger"
//     border="danger"
//     style={{ width: "30rem" }}
//     id="close-button"
//   >
//     Questions : {cardQuest}
//     <Form>
//       <Form.Group controlId="formBasicEmail">
//         <input
//           type="text"
//           value={answer}
//           onChange={(e) => setResponse(e.target.value)}
//         />
//       </Form.Group>
//       <Button
//         variant="primary"
//         type="submit"
//         onClick={() => {
//           setShow(false);
//         }}
//       >
//         Submit
//       </Button>
//     </Form>
//   </Card>
// ) : (
//   <div>
//     <Card
//       border="success"
//       bg="success"
//       style={{ width: "30rem" }}
//       onClick={() => setShow(true)}
//     >
//       <Card.Body>Reponse : {cardAns}</Card.Body>
//     </Card>
//   </div>
// )}

/* <Card
        bg="danger"
        border="danger"
        style={{ width: "30rem" }}
        id="close-button"
      >
        Questions : {cardQuest}
        <Form>
          <Form.Group controlId="formBasicEmail">
            <input
              type="text"
              value={response}
              onChange={(e) => setResponse(e.target.value)}
            />
            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                setShow(false);
              }}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Card>
      {response ? (
              <Card
                border="success"
                bg="success"
                style={{ width: "30rem" }}
                onClick={() => setShow(true)}
              >
                <Card.Body>Reponse : {cardAns}</Card.Body>
              </Card>
            ) : (
              <Card
                border="success"
                bg="success"
                style={{ width: "30rem" }}
                onClick={() => setShow(true)}
              >
                <Card.Body>MAUVAISE REPONSE, TRY AGAIN</Card.Body>
              </Card>
            )} */
