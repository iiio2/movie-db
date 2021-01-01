import Movies from "./components/Movies"; 
import MovieDetail from "./components/MovieDetail";
import { Route, Switch } from "react-router-dom"; 

import './App.css';

function App() {
  return (
    <div className="container">
      <h2 className="text-center mt-1 title" >Movie Blog</h2>
      <Switch>
        <Route path="/movie/:id" component={MovieDetail} />
        <Route path="/" component={Movies} />
      </Switch>
    </div>
  );
}

export default App;
