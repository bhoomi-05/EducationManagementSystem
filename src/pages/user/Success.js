import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import Table from "./Table";
import { ReactSVG } from "react-svg";

const Success = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // let check = false;
  //   const getTable = () => {
  //     check = true;
  //   };

  const addUser = () => {
    navigate("/User");
  };

  const addTeacher = () => {
    navigate("/Teachers");
  };

  const showUsers = () => {
    var config = {
      method: "get",
      url: "https://jsonplaceholder.typicode.com/users",
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setData(response.data);
        //getTable(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <section className="bg-slate-300">
        <div className="px-6 .py-6 ">
          <br />
          <div className="flex pr-6">
            <div className="">
              <FaUsers className="w-6 h-7"></FaUsers>
            </div>
            <div className="font-mono text-lg italics font-semibold pl-2 pb-1">
              WELCOME TO FINAL PAGE
            </div>
          </div>

          <br />
          <div className="flex px-4 justify-items-start top-3 right-3">
          <div className="items-center px-30 border-spacing-1 border-y-2 w-36 border-slate-700 border-4 bg-slate-600 hover:bg-slate-700 rounded-md py-3 px-3">
            <button
              className="px-3 border-spacing-2 border-separate border-slate-800 items-center text-white text-lg"
              value="au"
              id="au"
              onClick={addUser}
            >
              Add Users
            </button>
          </div>
          <br />
          <div className="items-center px-30 border-spacing-1 border-y-2 w-36 border-slate-700 border-4 rounded-md bg-slate-600 hover:bg-slate-700 py-3 px-2">
            <button
              className="px-2 border-spacing-2 border-separate items-center text-white text-lg"
              value="a"
              id="a"
              onClick={addTeacher}
            >
              Add Teacher
            </button>
          </div>
          <br />
          <div className="items-center px-30 border-spacing-1 border-y-2 w-36 border-slate-700 border-4 bg-slate-600 hover:bg-slate-700 rounded-md py-3 px-3">
            <button
              className="pl-3 border-spacing-2 border-separate border-black items-center text-white text-lg"
              value="u"
              id="u"
              onClick={showUsers}
            >
              Show Users
            </button>
          </div>
          </div>
          <br />
          <div>
            <div className="border-4 border-b-slate-800 border">
              <h1 className="panel-heading">Users Table</h1>
              <div className=" border-b-slate-800 border">
                <Table data={data} />
              </div>
            </div>
          </div>

          <br />
          {/* <div className="bg-[image:var(vector.svg)]">
            <ReactSVG src="vector.svg" />
            Success
          </div> */}
          {/* <div>
          <>
            {check && (
              <div className="border-4 border-b-slate-800 border">
                <h1>Users Table</h1>
                <div>
                  <Table data={data} />
                </div>
              </div>
            )}
          </>
        </div> */}
        </div>
      </section>
    </>
  );
};

export default Success;
