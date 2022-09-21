// import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import List from './components/List';
import { trendingMovies,actionMovies,comedyMovies,thrillerMovies,horrorMovies,romanceMovies,animationMovies} from './constance/constant';
function App() {
  return (
    <>
    <Navbar/>
    <Banner></Banner>
    <List listTitle="Trending Movies" genreUrl={trendingMovies}/>
   <List listTitle="Action Movies" genreUrl={actionMovies}/>
   <List listTitle="Comedy Movies" genreUrl={comedyMovies}/>
   <List listTitle="Thriller Movies" genreUrl={thrillerMovies}/>
   <List listTitle="Horror Movies" genreUrl={horrorMovies}/>
   <List listTitle="Romance Movies" genreUrl={romanceMovies}/>
   <List listTitle="Animation Movies" genreUrl={animationMovies}/>
    </>
  );
}

export default App;
