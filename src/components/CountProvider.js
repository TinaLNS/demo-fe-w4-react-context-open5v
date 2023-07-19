import React, { createContext, useState } from 'react';

// This will provide our global data
const CountContext = createContext();

// THis provider will say who gets the data...
function CountProvider({ children }){

    const [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);
    }

    function decrement(){
        setCount(count - 1);
    }

    return(
        <CountContext.Provider value={ {count, increment, decrement } } >
            { children }
        </CountContext.Provider>
    );
}

export { CountContext, CountProvider };