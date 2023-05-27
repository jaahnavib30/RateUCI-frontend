import "./event-card.css"
import TestImg from "../../assets/pet.jpg"
import Card from 'react-bootstrap/Card'

function EventCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={TestImg} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>Here is some placeholder text for this event</Card.Text>
        </Card.Body>
      </Card>
    );
}

export default EventCard;