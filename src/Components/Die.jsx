import React from 'react';

const Die = (props) => {
    const styles={
        backgroundColor:props.isHeld? "green": "yellow"
    }
    return (
        <div>
            <button  style={styles}  
            onClick={props.hold}
            className='p-3 shadow-xl rounded font-bold '>
                 {props.value}  </button>
        </div>
    );
};

export default Die;