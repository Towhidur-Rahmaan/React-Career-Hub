import React from 'react';

const Banner = () => {
    return (
        <div className=' text-center flex shadow-2xl'>
            <div className='w-1/2 text-left ml-20 mt-40'>
                <h2 className='text-5xl mb-5 '>One Step <br />Closer To Your <br /><span className='text-violet-500'>Dream Job</span></h2>
            <p className='mb-5'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
            <button className='btn btn-primary '>Get Started</button>
            </div>
            <div className='w-1/2'>
                <img src="/assets/images/user.png" alt="banner" />
            </div>
        </div>
    );
};

export default Banner;