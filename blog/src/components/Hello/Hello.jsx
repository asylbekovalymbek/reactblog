import React from 'react';

const Hello = ({name,age}) => {
    // console.log(props)
    return (
        // ретерн всегда возращает только один элемент, поэтому надо добавлять пустые чтобы соединить
        <>
            <p>
                Hello World {name}
            </p> 
            <p>
                Age {age}
            </p>
        </>
    );
};

export default Hello;