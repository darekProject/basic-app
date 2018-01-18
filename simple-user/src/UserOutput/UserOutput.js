import React from 'react';

const outputUser = (props) => {
    return (
      <div>
          <div className="name">
              <p>Name: {props.value.name}</p>
              <p>Surname: {props.value.surname}</p>
              <p>Email: {props.value.email}</p>
          </div>
      </div>
    );
};

export default outputUser;