import EventCard from '../../components/event-card/event-card.js'
import NavBar from '../../components/navbar/navbar.js';

function Home() {
    return (
        <div>
            <NavBar />
            
            <EventCard event_name='Hello World!'/>
        </div>);
}

export default Home;