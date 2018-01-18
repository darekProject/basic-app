import React, {Component} from 'react';
import Tasks from './Tasks/Tasks';

class App extends Component {
    state = {
        tasks: [
            {id: 1, value: "Buy PC"},
            {id: 2, value: "buy keyboard"},
            {id: 3, value: "buy table"}
        ],
        showTasks: false
    };

    removeTask = (taskIndex) => {
        const tasks = [...this.state.tasks];
        tasks.splice(taskIndex, 1);
        this.setState({tasks: tasks});
    };

    valueHandler = (event, taskId) => {
        const taskIndex = this.state.tasks.findIndex(t => {
            return t.id === taskId;
        });

        const task = {
            ...this.state.tasks[taskIndex]
        };
        task.value = event.target.value;

        const tasks = [...this.state.tasks];
        tasks[taskIndex] = task;

        this.setState({tasks: tasks});

    };

    toggleSwitchTaskHandler = () => {
        const doesShow = this.state.showTasks;
        this.setState({showTasks: !doesShow});
    };

    render() {
        let tasks = null;

        if (this.state.showTasks) {
            tasks = (
                <div>
                    {
                        this.state.tasks.map((task, index) => {
                            return <Tasks
                                key={task.id}
                                value={task.value}
                                remove={() => this.removeTask(index)}
                                changeTask={(event) => this.valueHandler(event, task.id)}/>
                        })
                    }
                </div>
            );
        }

        return (
            <div>
                <h1>LIST PRODUCTS TO BUY</h1>
                <button onClick={this.toggleSwitchTaskHandler}>SHOW/HIDE</button>
                {tasks}
            </div>
        );
    }
}

export default App;
