import React, {Component} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import {Login} from "./components/Login/Login";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import "./App.css";
import TaskList from './components/Task/TaskList';
import {NewTask} from './components/Task/NewTask';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoggedIn:false};
    }

    render() {

        const LoginView = () => {
            return <Login/>
        };

        const TaskListView = () => {
            return <TaskList/>
        };

        const NewTaskView = () => {
            return <NewTask/>
        };

        return (
            <Router>
                <div className="App" onLoad={this.setUser}>
                    <div>
                        <Switch>
                            <Route exact path="/" component={LoginView}/>
                            <Route path="/taskList" component={TaskListView}/>
                            <Route path="/NewTask" component={NewTaskView}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }

}

export default App;