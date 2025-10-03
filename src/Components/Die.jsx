import React from 'react';

const Die = (props) => {
    return (
        <div>
            <button 
            className='p-3 shadow-xl rounded font-bold bg-amber-500'>
                 {props.value} </button>
        </div>
    );
};

export default Die;