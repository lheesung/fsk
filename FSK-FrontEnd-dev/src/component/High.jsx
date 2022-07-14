import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= "img/elementary.jpg" />
      <Card.Body>
        <Card.Title>중,고등학생</Card.Title>
        <Card.Text>
        자동 출석 체크
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;