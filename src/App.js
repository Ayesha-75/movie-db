import {Route, Switch} from 'react-router-dom'

import PopularMoviesPage from './component/PopularMoviesPage'
import TopRatedMoviesPage from './component/TopRatedMoviesPage'
import UpComingMoviesPage from './component/UpComingMoviesPage'
import SingleMovieDetailsPage from './component/SingleMovieDetailsPage'
import SearchedMoviesPage from './component/SearchedMoviesPage'
// import Header from './component/Header'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={PopularMoviesPage} />
    <Route exact path="/top-rated" component={TopRatedMoviesPage} />
    <Route exact path="/upcoming" component={UpComingMoviesPage} />
    <Route exact path="/search" component={SearchedMoviesPage} />
    <Route path="/movie/:id" component={SingleMovieDetailsPage} />
  </Switch>
)

// const App = () => (
//   <div>
//     <PopularMoviesPage />
//   </div>
// )

export default App
