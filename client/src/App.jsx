import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

function App() {
  return (
    <>
      <h1>Hey there! 👋</h1>
      <Container>
        <Row>
          <Col className="border border-black mx-2 rounded">
            <h2 className="mt-4 mx-2">My amigurumi</h2>
            <p className="border border-black rounded mx-2 my-4 px-4 py-2">
              Amigurumi is the Japanese art of crocheting or knitting small,
              stuffed yarn creatures, often animals, characters, or other cute,
              whimsical figures. This craft is known for its emphasis on
              creating endearing, soft toys with exaggerated features, such as
              large eyes and rounded shapes, that appeal to both children and
              adults. Amigurumi has grown in popularity worldwide, with crafters
              sharing their unique designs and patterns, creating everything
              from tiny animals to pop culture-inspired characters. The art form
              is accessible to beginners, requiring only a few basic stitches,
              making it a rewarding and enjoyable hobby for people of all ages.
            </p>
            <Card
              style={{ width: "18rem" }}
              className="border border-black m-2 rounded"
            >
              <Card.Header>
                <Card.Title>Card Title</Card.Title>
              </Card.Header>
              <Card.Img
                variant="top"
                src="https://cdn.pixabay.com/photo/2020/09/03/20/42/knitting-5542369_640.jpg"
              />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Save piece</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="border border-black mx-2 rounded">2 of 2</Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
