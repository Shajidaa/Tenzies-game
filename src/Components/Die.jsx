import React from 'react';

const Die = (props) => {
    const styles={
        backgroundColor:props.isHeld? "green": "yellow"
    }
    return (
        <div>
            <button  style={styles}  
            onClick={props.hold}
            aria-pressed={props.isHeld}
            aria-label={`Die with value ${props.value} ,
             ${props.isHeld?'held':'not held'}
            `}
           className='p-3 shadow-xl rounded font-bold '
            >
                 {props.value}  </button>
        </div>
    );
};

export default Die;