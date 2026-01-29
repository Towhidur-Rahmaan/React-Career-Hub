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
                        <img src="/assets/images/bg1.png" alt="" />
                        <p className='text-black text-2xl font-bold mt-20'>Job Details</p>
                        <img src="/assets/images/bg2.png" alt="" />
                        
                    </div>
            </div>

            <div className='grid gap-4 md:grid-cols-4 mt-8'>
                <div className='md:col-span-3'>
                    <h2><span className='font-bold'>Job Description :</span> {job.job_description}</h2>
                    <br />
                    <p>
                        <span className='font-bold'>Job Responsibility:</span> {job.job_responsibility}
                    </p>
                    <br />
                    <p> <span className='font-bold'>Educational Requirements:</span> {job.educational_requirements}</p>
                    <br />
                    <p>
                        <span className='font-bold'>Experiences:</span> {job.experiences}
                    </p>
                    <br />
                </div>
                
                <div className=' bg-violet-100 rounded-xl'>
                    <h2 className='text-xl font-bold text-black ml-4'>Job Details</h2>
                    <hr className='mb-4 border-black'/>

                    <div className='flex mb-2 ml-4'>
                        <img src="/src/assets/icons/money.png" alt="" />
                        <p className='text-black'><span className='font-bold '>Salary:</span> {job.salary} (Per Month)</p>
                    </div>
                    
                    <div className='flex ml-4'>
                        <img src="/src/assets/icons/calendar.png" alt="" />
                        <p className='text-black'><span className='font-bold '>Job Title:</span> {job.job_title}</p>
                       
                    </div >

                    <div className='text-black mt-4 mb-4 font-bold ml-4'>
                        Contact Information
                    </div>
                    <hr className='border-black mb-4' />
                    

                    <div className='flex mb-2 ml-4'>
                        <img src="/src/assets/icons/phone.png" alt=""/>
                        <p className='text-black'><span className='font-bold '>Phone:</span> {job.contact_information.phone}</p>
                       
                    </div >
                    <div className='flex text-black mb-2 ml-4'>
                        <img src="/src/assets/icons/email.png" alt="" />
                        <p className=''>email: {job.contact_information.email}</p>
                    </div>

                    <div className='flex  mb-2 ml-4'>
                        <img src="/src/assets/icons/Location2.png" alt="" />
                        <p className='text-black'><span className='font-bold '>Location:</span> {job.contact_information.address}</p>
                    </div>
                    

                    <div className='mb-6 '>
                        <button 
                    onClick={handleApplyJob}
                    className="btn btn-primary w-full">Apply Now</button>
                    </div>
                </div>
                

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;