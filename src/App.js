import { Container } from 'react-bootstrap';
import Jumbotrons from './components/Jumbotron/Jumbotron';
import Navbars from './components/Navbars/Navbars';
import NewsData from './components/NewsData/NewsData';
function App() {
  return (
    <Container>
       <Navbars/>
     <Jumbotrons/>
      <NewsData/>
    </Container>
  );
}

export default App;
