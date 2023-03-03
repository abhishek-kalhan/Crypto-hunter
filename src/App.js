import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import Header from './components/Header';
import Home from './pages/Home';
import Coin from './pages/Coin';
import { makeStyles } from "@material-ui/core"

function App() {

  const useStyles = makeStyles(() => ({
    App: {
        backgroundColor: "#14161a",
        color: "white",
        minHeight: "100vh"
    }
  }))

  const classes = useStyles()

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header/>
        <Route path="/" component={Home} exact/>
        <Route path="/coins/:name" component={Coin}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
