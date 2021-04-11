import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value );

    const handleReset = (e) => {
        setCounter(value)
    }

    const handleSubstract = (e) => {
        setCounter(counter - 1)
    }

    const handleAdd = (e) => {
        setCounter(counter + 1)
        //setCounter(( counter ) => counter + 1);
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
            <button onClick={ handleAdd }>+1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
};

CounterApp.defaultProps = {
    value: 10
};

export default CounterApp;