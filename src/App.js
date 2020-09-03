import React, {Component} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import {Login} from "./components/Login";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "./App.css";
import TaskList from './components/TaskList';



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

        return (
            <Router>
                <div className="App" onLoad={this.setUser}>
                    <div>
                        <Route exact path="/" component={LoginView}/>
                        <Route path="/taskList" component={TaskListView}/>
                    </div>
                </div>
            </Router>
        );
    }

}

export default App;