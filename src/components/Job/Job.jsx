import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="outline-1 outline-gray-700">
      <div className="<div className=" card bg-base-100 w-72 shadow-xl>
        <figure>
          <img className="w-28 mt-4 ml-4" src={logo} alt="logo" />
        </figure>
        <div className="card-body font-bold ">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="">
            <button className="px-5 py-2 font-bold border rounded border-purple-800 mr-4 text-purple-500">
                {remote_or_onsite}
            </button>
            <button className="px-5 py-2 font-bold border rounded border-purple-800 mr-4 text-purple-500">
                {job_type}
            </button>
            <div className="flex ">
                <h2 className="flex mr-2"><IoLocationOutline className="text-2xl"/>{location}</h2>
                
                
                    <h2 className="flex"><AiOutlineDollarCircle className="text-2xl " />{salary}</h2>
                
                
            </div>
          </div>
          
          <div className="card-actions text-left">
            <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
