import React from "react";
import { Alert, Container } from 'reactstrap';

function QuestionComponent(props) {
  return (
    <Container>
      <Alert color="warning" style={{ marginRight: 45 }} className="text-center">
        {props.question}
      </Alert>
    </Container>
  )
}
export default QuestionComponent