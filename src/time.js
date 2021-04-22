import React from 'react'

function IsMorning(props) {
    return (
        <h1>Good {props.dayTime} {props.dayTime === `Morning` ? `🌄` : `🌃`}</h1>
    );
}
export default IsMorning;