import React, { useContext } from 'react'; //import useContext hook
import { Buttons } from './Buttons';
import { CountContext } from './CountProvider'; // import the data

function CountDisplay() {
    const fakeData = useContext(CountContext); // consuming the data

    return(
        <div className="text-success">
            <Buttons />
            <h2>The current count is: {fakeData} </h2>
        </div>
    )
}

export { CountDisplay }