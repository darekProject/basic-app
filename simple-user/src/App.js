import React, {Component} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        name: 'Jan',
        surname: 'Kowalski',
        email: 'jan.kowalski@gmail.com'
    };

    nameHandler = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    surnameHandler = (event) => {
        this.setState({
            surname: event.target.value
        });
    };
    emailHandler = (event) => {
        this.setState({
            email: event.target.value
        });
    };

    clearValueInput = () => {
        this.setState({
            name: '',
            surname: '',
            email: ''
        })
    };

    render() {
        return (
            <div>
                <UserInput defaultValue={this.state}
                           changedName={this.nameHandler}
                           changedSurname={this.surnameHandler}
                           changedEmail={this.emailHandler}/>
                <button onClick={this.clearValueInput}>CLEAR</button>
                <UserOutput value={this.state}/>
            </div>
        );
    }
}

export default App;
