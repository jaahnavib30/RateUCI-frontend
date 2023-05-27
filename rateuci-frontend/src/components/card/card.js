import "./card.css"

function Card(props) {
    return (
        <div className='card-container'>
            <h2>{props.event_name}</h2>
            <ul>
                <li>{props.event_date}</li>
                <li>{props.event_location}</li>
            </ul>
        </div>);
}

export default Card;