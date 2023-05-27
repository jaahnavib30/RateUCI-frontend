import EventCard from '../event-card/event-card.js'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function CardGrid(props){
    var cards = []
    if (props && props.events) {
        cards = props.events.map(function(event) {
            return (
                <Col key={event.id}>
                    <EventCard name={event.name}/>
                </Col>);
        })
    }

    return (
        <Row className="grid-container">
            {cards}
        </Row>);
}

export default CardGrid;