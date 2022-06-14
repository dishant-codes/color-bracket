import React, { useState, useContext, useEffect } from "react";
import { Context } from "./Store";
import { Link } from "react-router-dom";

function Home(props) {
  const [loggedin, setLoggedin] = useContext(Context);
  const [employee, setEmployee] = useState([]);

  const FetchEmployees = () => {
    fetch("https://retoolapi.dev/GFHqAV/getemployees")
      .then((res) => res.json())
      .then((data) => {
        setEmployee(data);
      });
  };

  useEffect(() => {
    FetchEmployees();
  }, []);

  return (
    <div className="p-[20px] bg-[#1c1e21]">
      <button
        className="cursor-pointer inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={() => setLoggedin(false)}
      >
        Logout
      </button>

      <div className="container">
        <h3 className="text-center text-[2em] font-bold my-[20px] text-white">
          Employees
        </h3>
        <div className="employees flex flex-wrap justify-center">
          {employee.map((emp) => {
            return (
              <Link to="employee" onClick={() => props.setEmpID(emp.id)}>
                <div
                  key={emp.id}
                  className="m-[20px] h-[210px] max-w-sm flex items-center px-[20px] justify-center bg-white rounded-lg border w-[380px] border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                >
                  <a href="#">
                    <img
                      className="rounded-full w-[128px] h-[128px] bg-white"
                      src={emp.company_logo}
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {emp.name}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {emp.designation}
                      </p>
                    </a>
                    <p className="mb-3 font-normal text-gray-300 dark:text-gray-200">
                      Company: {emp.company}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
