import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li>
                <a className='mr-10' href={route.url}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;