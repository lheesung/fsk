import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem', margin: "0px 40px" }}>
      <Card.Img variant="top" src= "img/elementary.jpg" />
      <Card.Body>
        <Card.Title>초등학생</Card.Title>
        <Card.Text>
          등하원 서비스를 제공합니다.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;