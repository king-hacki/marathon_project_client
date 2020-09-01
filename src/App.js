import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './store'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";


class App extends React.Component {

  render() {
    return (
        <Provider store={store}>
            <Router>
                <Navbar/>
                <Footer/>
            </Router>
        </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App