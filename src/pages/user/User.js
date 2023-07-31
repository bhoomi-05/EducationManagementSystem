import React, { useState, useEffect } from "react";
// import { toast } from "react-hot-toast";
import { AiOutlineUserAdd } from "react-icons/ai";
//import { useHistory } from "react-router-dom";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [g, setg] = useState("");
  const [mail, setmail] = useState("");
  const [course, setcourse] = useState("");
  const [doj, setdoj] = useState("");
  const [bn, setbn] = useState("");
  const [lp, setlp] = useState("");
  const [np, setnp] = useState("");
  const [loading, setLoading] = useState(false);
  const [phone, setphone]= useState("");

  const navigate = useNavigate();

  const flp = lp.replace("T", " ");
  const fnp = np.replace("T", " ");

  const sendData = (e) => {
    if (e) {
      e.preventDefault();
    }

    var data = JSON.stringify({
      name: name,
      age: age,
      sex: g,
      email: mail,
      phone: phone,
      course: course,
      batchno: bn,
      date_of_joining: doj,
      last_paid: flp,
      next_pay: fnp
    });

    var config = {
      method: "post",
      url: "https://gt2yrilvf3.execute-api.us-east-1.amazonaws.com/dev/post_students",
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
  };

  return (
    <>
      <section className="bg-slate-900 dark:bg-gray-900 max-w-full h-auto">
        <div className="bg-slate-900 px-5 sm:px-10 md:px-10 lg-px-10  overflow-auto overflow-y-auto h-screen">
          <div className="flex flex-col items-center justify-center sm:px-0 px-0 py-8 mx-auto lg:py-0 w-auto overflow-x-auto">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            ></a>
            <div className="w-full bg-blue-950 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div className="flex">
                  <AiOutlineUserAdd className="w-8 h-8 bg-white bg-opacity-40 rounded-[10px] "></AiOutlineUserAdd>
                  <h1 className="text-xl ml-4 font-bold leading-tight tracking-tight text-gray-50 md:text-2xl dark:text-white">
                    ADD USERS
                  </h1>
                </div>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      name="name"
                      for="name"
                      className="block mb-2 text-sm font-medium text-gray-50 dark:text-white"
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
                  <div>
                    <label
                      for="age"
                      className="block mb-2 text-sm font-medium text-gray-50 dark:text-white"
                    >
                      Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      id="age"
                      onChange={(e) => setage(e.target.value)}
                      placeholder="Enter age"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>

                  {/* <div>
                    <label
                      name="reg"
                      for="reg"
                      className="block mb-2 text-sm font-medium text-gray-50 dark:text-white"
                    >
                      Registration Number
                    </label>
                    <input
                      type="name"
                      name="reg"
                      id="reg"
                      onChange={(e) => setname(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter the registration number"
                      required=""
                    />
                  </div> */}

                  <div>
                    <p className="text-gray-50">Please enter the gender:</p>
                     
                    <input
                      name="g"
                      for="g"
                      type="radio"
                      id="female"
                      value="female"
                      onChange={(e) => setg(e.target.value)}
                    />
                     {" "}
                    <label for="html" className="text-gray-50">
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
                    <label for="male" className="text-gray-50">
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
                    <label for="other" className="text-gray-50">
                      Other
                    </label>
                  </div>
                  <br />
                  <div>
                    <label
                      name="mail"
                      for="mail"
                      className="block mb-2 text-sm font-medium text-gray-50 dark:text-white"
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
                      for="phone"
                      className="block mb-2 text-sm font-medium text-gray-50 dark:text-white"
                    >
                      Phone No.
                    </label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      onChange={(e) => setphone(e.target.value)}
                      placeholder="10 digit phone number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <br />
                  <div>
                    <label
                      name="course"
                      for="course"
                      className="block mb-2 text-sm font-medium text-gray-50 dark:text-white"
                    >
                      Course
                    </label>
                    <input
                      type="name"
                      name="course"
                      id="course"
                      onChange={(e) => setcourse(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter course"
                      required=""
                    />
                  </div>
                  <br />
                  <div>
                    <label
                      for="bn"
                      className="w-96 block mb-2 text-sm font-medium text-gray-50 dark:text-white"
                    >
                      Batch No.
                    </label>
                    <input
                      type="number"
                      name="bn"
                      id="bn"
                      onChange={(e) => setbn(e.target.value)}
                      placeholder="Enter your batch no."
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <br />
                  <div>
                    <label
                      for="doj"
                      className="block mb-2 text-sm font-medium text-gray-50 dark:text-white"
                    >
                      Date of Joining
                    </label>
                    <input
                      type="date"
                      name="doj"
                      id="doj"
                      onChange={(e) => setdoj(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <br />
                  <div className="">
                    {/* <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>  */}

                    <br />

                    <div>
                      <label
                        for="lp"
                        className="block mb-2 text-sm font-medium text-gray-50 dark:text-white"
                      >
                        Last Paid On
                      </label>
                      <input
                        type="date"
                        name="lp"
                        id="lp"
                        onChange={(e) => setlp(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>

                    <br />
                    <br />
                    <div>
                      <label
                        for="np"
                        className="block mb-2 text-sm font-medium text-gray-50 dark:text-white"
                      >
                        Next Payment
                      </label>
                      <input
                        type="date"
                        name="np"
                        id="np"
                        onChange={(e) => setnp(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                    <br />
                    <div className="ml-3 text-sm">
                      <label
                        for="terms"
                        className=" text-gray-500 dark:text-gray-300"
                      >
                        I accept the
                        <a
                          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                          href="#"
                        >
                          {" "}
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    name="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={sendData}
                  >
                    {loading && (
                      <CgSpinner size={20} className="mt-1 animate-spin" />
                    )}
                    Register
                  </button>
                  <p className="text-sm  text-gray-500 dark:text-gray-400">
                    Already have an account?
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Login here
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default User;
