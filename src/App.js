import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './store'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./components/navigation/Navbar";
import MarathonTable from "./components/marathon/MarathonTable";
import SprintTable from "./components/sprint/SprintTable";
import MarathonAdd from "./components/marathon/MarathonAdd";
import MarathonUpdate from "./components/marathon/MarathonUpdate";
import SprintAdd from "./components/sprint/SprintAdd";
import TaskTable from "./components/task/TaskTable";
import TaskAdd from "./components/task/TaskAdd";
import SprintUpdate from "./components/sprint/SprintUpdate";
import TaskUpdate from "./components/task/TaskUpdate";
import UserTable from "./components/user/UserTable";
import Home from "./components/navigation/Home";
import ProgressTable from "./components/progress/ProgressTable";
import TaskAndSolution from "./components/progress/TaskAndSolution";
import Login from "./components/navigation/Login";
import {loadUser} from "./actions/UserAction";
import UserPage from "./components/user/UserPage";
import AddUserToMarathon from "./components/marathon/AddUserToMarathon";
import AdminRoute from "./components/navigation/AdminRoute";
import UserRoute from "./components/navigation/UserRoute";
import Registration from "./components/navigation/Registration";
import UserPageMarathon from "./components/user/UserPageMarathon";
import UserSolution from "./components/progress/UserSolution";

class App extends React.Component {

    componentDidMount() {
        store.dispatch(loadUser())
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path={"/login"} component={Login}/>
                        <Route exact path={"/"} component={Login}/>
                        <Route exact path={"/registration"} component={Registration}/>
                        <UserRoute exact path={"/user_page"} component={UserPage}/>
                        <UserRoute exact path={"/user_page/:marathonId"} component={UserPageMarathon}/>
                        <UserRoute exact path={"/solution/:progressId"} component={TaskAndSolution}/>
                        <UserRoute exact path={"/solution/user/:taskId"} component={UserSolution}/>
                        <AdminRoute exact path={"/marathon/user/add/:marathonId"} component={AddUserToMarathon} />
                        <AdminRoute exact path={"/home"} component={Home} />
                        <AdminRoute exact path={"/marathon/list"} component={MarathonTable} />
                        <AdminRoute exact path={"/marathon/save"} component={MarathonAdd} />
                        <AdminRoute exact path={"/marathon/update/:marathonId"} component={MarathonUpdate} />
                        <AdminRoute exact path={"/sprint/:marathonId"} component={SprintTable} />
                        <AdminRoute exact path={"/sprint/save/:marathonId"} component={SprintAdd} />
                        <AdminRoute exact path={"/sprint/:marathonId/update/:sprintId"} component={SprintUpdate} />
                        <AdminRoute exact path={"/task/:sprintId"} component={TaskTable}/>
                        <AdminRoute exact path={"/task/save/:sprintId"} component={TaskAdd} />
                        <AdminRoute exact path={"/task/:sprintId/update/:taskId"} component={TaskUpdate}/>
                        <AdminRoute exact path={"/user/list"} component={UserTable}/>
                        <AdminRoute exact path={"/user/marathon/:marathonId"} component={UserTable}/>
                        <AdminRoute exact path={"/progress/task/:taskId"} component={ProgressTable}/>
                        <AdminRoute exact path={"/progress/user/:userId"} component={ProgressTable}/>
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App