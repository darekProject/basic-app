import React from 'react';

const userInput = (props) => {
    return (
        <div className='input-section'>
            <div>
                <span>Name: </span>
                <input type="text" onChange={props.changedName} value={props.defaultValue.name}/>
            </div>
            <div>
                <span>Surname: </span>
                <input type="text" onChange={props.changedSurname} value={props.defaultValue.surname}/>
            </div>
            <div>
                <span>Email: </span>
                <input type="text" onChange={props.changedEmail} value={props.defaultValue.email}/>
            </div>
        </div>
    );
};

export default userInput;