import Card from '../../components/card/card.js'
import NavBar from '../../components/navbar/navbar.js';

function Home() {
    return (
        <div>
            <NavBar />
            <Card message='Hello World!'/>
        </div>);
}

export default Home;