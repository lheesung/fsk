import Carousel from 'react-bootstrap/Carousel'
const GLOBAL_HEIGHT = 600;

function IndividualIntervalsExample() {
  return (
    <Carousel style={{ height: GLOBAL_HEIGHT }}>
      <Carousel.Item interval={1000} style={{ height: GLOBAL_HEIGHT }}>
        <img
          className="d-block w-100"
          src="img/elementary.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} style={{ height: GLOBAL_HEIGHT }}>
        <img
          className="d-block w-100"
          src="img/elementary.jpg"
          alt="Second slide"
          />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: GLOBAL_HEIGHT }}>
        <img
          className="d-block w-100"
          src="img/elementary.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;