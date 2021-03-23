import './App.css';
import Row from './Row';
import Banner from './Banner';

import requests from './requests';

function App() {
  return (
    <div className="App">
      {/* {NavBar} */}
      <Banner />
      <h1>Netflix clon frontend</h1>
      <Row title="Originals by Netflix" obtainUrl={requests.obtainNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" obtainUrl={requests.obtainTrending}/>
      <Row title="Top Rated" obtainUrl={requests.obtainTopRated}/>
      <Row title="Action Movies" obtainUrl={requests.obtainActionMovies}/>
      <Row title="Comedy Movies" obtainUrl={requests.obtainComedyMovies}/>
      <Row title="Horror Movies" obtainUrl={requests.obtainHorrorMovies}/>
      <Row title="Romance Movies" obtainUrl={requests.obtainRomanceMovies}/>
      <Row title="Documentary" obtainUrl={requests.obtainDocumentaries}/>
    </div>
  );
}

export default App;
