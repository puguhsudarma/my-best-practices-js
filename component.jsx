import React, { useEffect } from 'react';

const rand = Math.random();

const Component = () => {
    if (rand > 0.3) {
        useEffect(() => {
            // handler
        }, []);
    }

    return (
        <div>
            <p>{'This is component'}</p>
        </div>
    );
};

export default Component;
