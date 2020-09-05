import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './store'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import MarathonTable from "./components/marathon/MarathonTable";
import SprintTable from "./components/sprint/SprintTable";
import MarathonAdd from "./components/marathon/MarathonAdd";
import MarathonUpdate from "./components/marathon/MarathonUpdate";
import SprintAdd from "./components/sprint/SprintAdd";
import TaskTable from "./components/task/TaskTable";
import TaskAdd from "./components/task/TaskAdd";
import SprintUpdate from "./components/sprint/SprintUpdate";
import TaskUpdate from "./components/task/TaskUpdate";

class App extends React.Component {

  render() {
    return (
        <Provider store={store}>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path={"/"} component={MarathonTable} />
                    <Route exact path={"/marathon/list"} component={MarathonTable} />
                    <Route exact path={"/marathon/save"} component={MarathonAdd} />
                    <Route exact path={"/marathon/update/:marathonId"} component={MarathonUpdate} />
                    <Route exact path={"/sprint/:marathonId"} component={SprintTable} />
                    <Route exact path={"/sprint/save/:marathonId"} component={SprintAdd} />
                    <Route exact path={"/sprint/:marathonId/update/:sprintId"} component={SprintUpdate} />
                    <Route exact path={"/task/:sprintId"} component={TaskTable}/>
                    <Route exact path={"/task/save/:sprintId"} component={TaskAdd} />
                    <Route exact path={"/task/:sprintId/update/:taskId"} component={TaskUpdate}/>
                </Switch>
                <Footer/>
            </Router>
        </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App