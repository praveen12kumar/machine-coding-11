import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from './components/Header';
import StarredMovies from './pages/StarredMovies';
import WatchList from './pages/WatchList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';

import Home from './pages/Home';


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/watchlist' element={<WatchList />} />
          <Route path='/starredmovies' element={<StarredMovies/>} />
          <Route path='/movie/:id' element={<MovieDetails/>} />
          <Route path='/new' element={<NewMovie />} />
        </Routes>      
    </div>
  );
}

export default App;
