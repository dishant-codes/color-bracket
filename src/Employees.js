import React, { useState, useEffect } from "react";

function Employees(props) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [company, setCompany] = useState("");
  const [interests, setInterests] = useState("");
  const [view_more, setView_more] = useState("");
  const [designation, setDesignation] = useState("");
  const [company_logo, setCompany_logo] = useState("");
  const [job_descripton, setJob_descripton] = useState("");

  const FetchEmployee = () => {
    fetch(`https://retoolapi.dev/H2F0Ui/getemployedetail?id=${props.empId}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data[0].name);
        setRating(data[0].rating);
        setCompany(data[0].company);
        setInterests(data[0].interests);
        setView_more(data[0].view_more);
        setDesignation(data[0].designation);
        setCompany_logo(data[0].company_logo);
        setJob_descripton(data[0].job_descripton);
      });
  };

  useEffect(() => {
    FetchEmployee();
  }, []);
  return (
    <div className=" container h-[100vh] bg-[linear-gradient(to_right,#396afc,#2948ff)] p-[20px] grid place-items-center">
      <div className="flex bg-white rounded p-[30px] shadow-lg shadow-indigo-100/60 ">
        <div className="m-[10px] flex flex-col justify-center">
          <img className="rounded " src={company_logo} alt="" />
          <p className="text-center">{company}</p>
        </div>
        <div className="ml-[20px]">
          <h4 className="text-[20px] mt-1 font-bold">{name}</h4>
          <p className="text-slate-600">{designation}</p>
          <p className="mt-[10px]">{rating}</p>
          <p>
            <span className="font-semibold">Interests:</span> {interests}
          </p>
          <p className="mb-1">{job_descripton}</p>
          <a
            target="_blank"
            href={view_more}
            className="mt-[10px] inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View more
          </a>
        </div>
      </div>
    </div>
  );
}

export default Employees;
