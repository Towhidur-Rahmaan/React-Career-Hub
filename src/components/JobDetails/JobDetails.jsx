import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { saveJobApplication } from '../../utility/localstorage';


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === parseInt(idInt));
    console.log(job);

    const handleApplyJob = () => {
        saveJobApplication(idInt)
        toast('Applied Successfully!');
    }
    return (
        <div>
            
            <div>
                <div className='flex justify-between bg-violet-100'>
                        <img src="/src/assets/images/bg1.png" alt="" />
                        <p className='text-black text-2xl font-bold mt-20'>Job Details</p>
                        <img src="/src/assets/images/bg2.png" alt="" />
                        
                    </div>
            </div>

            <div className='grid gap-4 md:grid-cols-4 mt-8'>
                <div className='border md:col-span-3'>
                    <h2>Job Details of:{job.job_title}</h2>
                    <p>{job.company_name}</p>
                    <p>{job.job_description}</p>
                </div>
                <div className='border'>
                    <h2 className='text-4xl'>side option</h2>
                    <button 
                    onClick={handleApplyJob}
                    className="btn btn-primary w-full">Apply Now</button>
                </div>
                

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;