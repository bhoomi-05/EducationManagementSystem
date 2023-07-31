import React, { useState, useEffect } from "react";
// import { toast } from "react-hot-toast";
import { AiOutlineUserAdd } from "react-icons/ai";
//import { useHistory } from "react-router-dom";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Teachers = () => {
  const [name, setname] = useState("");
  const [g, setg] = useState("");
  const [mail, setmail] = useState("");
  //const [course, setcourse] = useState("");
  const [loading, setLoading] = useState("");
  const [selectedDegree, setSelectedDegree] = useState("");
  const [selectedJob, setSelectedJob] = useState("");
  const [phone, setphone] = useState("");

  const jobOptions = {
    "B.Sc.": ["physics", "chemistry", "biology"],
    "M.Sc.": [
      "operating_system",
      "predictive_analytics",
      "data_mining",
    ],
    "B.Tech.": ["trigonometry", "calculus", "oops"],
  }; 

  const navigate = useNavigate();

  // Handle degree change event
  const handleDegreeChange = (e) => {
    const degree = e.target.value;
    setSelectedDegree(degree);
    setSelectedJob("");
  };

  // Handle job change event
  const handleJobChange = (e) => {
    const job = e.target.value;
    setSelectedJob(job);
  };

  const sendData = (e) => {
    if (e) {
      e.preventDefault();
    }

    var data = JSON.stringify({
    
      teacher_name: name,
      teacher_sex: g,
      teacher_email: mail,
      teacher_phone: phone,
      degree: selectedDegree,
      course: selectedJob
    });
  
    var config = {
      method: "post",
      url: "https://gt2yrilvf3.execute-api.us-east-1.amazonaws.com/dev/post_teachers",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
  
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        window.alert("data submitted successfully");
        navigate("/success");
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
    }
  

  return (
    <>
      <section>
        <div className="bg-orange-200 px-5 sm:px-10 md:px-10 lg-px-10  overflow-auto overflow-y-auto h-screen pb-3">
          <div className="flex flex-col items-center justify-center sm:px-0 px-0 py-8 mx-auto lg:py-0 w-auto overflow-x-auto">
            <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-black"></a>
            <div className="w-full bg-gradient-to-r from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div className="flex">
                  <AiOutlineUserAdd className="w-8 h-8 bg-white bg-opacity-40 rounded-[10px] "></AiOutlineUserAdd>
                  <h1 className="text-xl ml-4 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    ADD TEACHER
                  </h1>
                </div>
                {/* <form className="space-y-4 md:space-y-6" action="#"> */}
                <div>
                  <label
                    name="name"
                    for="name"
                    className="block mb-2 text-sm font-medium  text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    onChange={(e) => setname(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter name"
                    required=""
                  />
                </div>
                <br />
                {/* <div>
                    <label
                      name="tid"
                      for="tid"
                      className="block mb-2 text-sm font-medium  text-gray-900"
                    >
                      TeacherId
                    </label>
                    <input
                      type="number"
                      name="tid"
                      id="tid"
                      onChange={(e) => setname(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter teacherid"
                      required=""
                    />
                  </div> */}
                {/* <br /> */}

                <div>
                  <p className="text-gray-900">Please enter the gender:</p>
                   
                  <input
                    name="g"
                    for="g"
                    type="radio"
                    id="female"
                    value="female"
                    onChange={(e) => setg(e.target.value)}
                  />
                   {" "}
                  <label for="html" className="text-gray-900">
                    Female
                  </label>
                  <br />
                   
                  <input
                    name="g"
                    for="g"
                    type="radio"
                    id="male"
                    value="male"
                    onChange={(e) => setg(e.target.value)}
                  />
                   {" "}
                  <label for="male" className="text-gray-900">
                    Male
                  </label>
                  <br />
                   
                  <input
                    name="g"
                    for="g"
                    type="radio"
                    id="other"
                    value="other"
                    onChange={(e) => setg(e.target.value)}
                  />
                   {" "}
                  <label for="other" className="text-gray-900">
                    Other
                  </label>
                </div>
                <br />
                <div>
                  <label
                    name="mail"
                    for="mail"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="name"
                    name="mail"
                    id="mail"
                    onChange={(e) => setmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter email id"
                    required=""
                  />
                </div>
                <br />
                <div>
                  <label
                    name="phone"
                    for="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone No.
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    onChange={(e) => setphone(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="+91 (10-digit phone number)"
                    required=""
                  />
                </div>
                <br />
                <div>
                  <label htmlFor="degree">Select a degree:</label>
                  <select
                    id="degree"
                    value={selectedDegree}
                    onChange={handleDegreeChange}
                  >
                    <option value="">Select</option>
                    <option value="B.Sc.">B.Sc.</option>
                    <option value="M.Sc.">M.Sc.</option>
                    <option value="B.Tech.">B.Tech.</option>
                  </select>

                  {selectedDegree && (
                    <div>
                      <label id="job" for="job">Select a course:</label>
                      <select
                        id="job"
                        value={selectedJob}
                        onChange={handleJobChange}
                      >
                        <option value="">Select</option>
                        {jobOptions[selectedDegree].map((job) => (
                          <option key={job} value={job}>
                            {job}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* {selectedJob && (
                    <div>
                      <h3>Selected Job:</h3>
                      <p>{selectedJob}</p>
                    </div>
                  )} */}
                </div>
              </div>
              <div className="px-36 pb-8">
              <button
                type="submit"
                name="submit"
                className="justify-items-center text-black bg-amber-600 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={sendData}
              >
                {loading && (
                  <CgSpinner size={20} className="mt-1 animate-spin" />
                )}
                Register Teacher
              </button>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Teachers;
// {
//   "teacher_name": "nidhi",
//   "teacher_sex": "female",
//   "teacher_email": "nidhi@gmail.com",
//   "teacher_phone": "222222222",
//   "degree": "B.Tech.",
//   "course": "physics"
// }