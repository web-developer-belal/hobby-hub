import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
            <span className="loading loading-bars loading-2xl"></span>
            <p className='text-xs mt-2'>Loading...</p>
        </div>
    );
};

export default Loading;