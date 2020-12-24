import React, { useEffect } from 'react';

const Component = () => {
    useEffect(() => {
        // handler
    }, []);

    return (
        <div>
            <p>{'This is component'}</p>
        </div>
    );
};

export default Component;
