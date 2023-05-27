import Card from '../../components/card/card.js'
import NavBar from '../../components/navbar/navbar.js';

function Home() {
    return (
        <div>
            <NavBar />
            <Card event_name='Hello World!' 
                  event_date='insert date here' 
                  event_location='insert location here'/>
        </div>);
}

export default Home;