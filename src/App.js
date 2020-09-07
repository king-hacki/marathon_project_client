import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './store'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./components/admin/navigation/Navbar";
import Footer from "./components/admin/navigation/Footer";
import MarathonTable from "./components/admin/marathon/MarathonTable";
import SprintTable from "./components/admin/sprint/SprintTable";
import MarathonAdd from "./components/admin/marathon/MarathonAdd";
import MarathonUpdate from "./components/admin/marathon/MarathonUpdate";
import SprintAdd from "./components/admin/sprint/SprintAdd";
import TaskTable from "./components/admin/task/TaskTable";
import TaskAdd from "./components/admin/task/TaskAdd";
import SprintUpdate from "./components/admin/sprint/SprintUpdate";
import TaskUpdate from "./components/admin/task/TaskUpdate";
import UserTable from "./components/admin/user/UserTable";
import Home from "./components/admin/navigation/Home";
import ProgressTable from "./components/admin/progress/ProgressTable";
import TaskAndSolution from "./components/admin/progress/TaskAndSolution";

class App extends React.Component {

  render() {
    return (
        <Provider store={store}>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path={"/home"} component={Home} />
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
                    <Route exact path={"/user/list"} component={UserTable}/>
                    <Route exact path={"/user/marathon/:marathonId"} component={UserTable}/>
                    <Route exact path={"/progress/task/:taskId"} component={ProgressTable}/>
                    <Route exact path={"/progress/user/:userId"} component={ProgressTable}/>
                    <Route exact path={"/solution/:progressId"} component={TaskAndSolution}/>
                </Switch>
                <Footer/>
            </Router>
        </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App