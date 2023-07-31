// import React from "react";
// import { MdLogin } from "react-icons/md";
// import { GiAbstract084 } from "react-icons/gi";

// const Main = () => {
//   const backgroundImageUrl =
//     "https://static.vecteezy.com/system/resources/previews/003/364/706/original/abstract-modern-geometric-pastel-blue-wallpaper-background-free-vector.jpg";

//   return (
//     <>
//       <section>
//         <div
//           className="relative bg-cover bg-center h-screen object-scale-down w-full h-60"
//           style={{ backgroundImage: `url(${backgroundImageUrl})` }}
//         >
//           <div className="flex justify-center items-center h-full">
//             {/* Content of your home page */}
//           </div>
//           <div>
//             <div>

//             </div>
//             <div>
//               <div className=" bg-sky-700 opacity-80 hover: opacity-100 hover:bg-sky-900 absolute rounded py-2 px-4 border-slate-800  border-spacing-2 top-0 right-0 mt-4 mr-4 flex">
//                 <MdLogin style={{ color: "white" }} className="pr-1 h-6 w-6" />
//                 <button className=" text-white font-bold  ">Sign Up</button>
//               </div>
//             </div>

//             <div><div className="top-12 left-6">
//                 <GiAbstract084 style={{ color: "black" }}  className="h-20 w-20 top-24" />
//               </div></div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Main;
import React from "react";
import { MdLogin } from "react-icons/md";
//import { GiAbstract084 } from "react-icons/gi";
import { FcAbout } from "react-icons/fc";
//import allen from "./pages/user/allen.svg";

const Main = () => {
  const backgroundImageUrl =
    "https://static.vecteezy.com/system/resources/previews/003/364/706/original/abstract-modern-geometric-pastel-blue-wallpaper-background-free-vector.jpg";

  //const logo = "https://icons8.com/icon/0FrKuLkNTEgw/allen-career-institute";

  return (
    <>
      <section>
        <div
          className="relative bg-cover bg-center object-scale-down w-full h-32"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
          <div className="flex justify-center items-center h-full">
            {/* Content of your home page */}
          </div>
          <div>
            <div>
              <div className="absolute py-2 px-4 border-slate-800 border-spacing-2 top-0 left-5 mt-4 mr-4 flex">
                <button className="text-black font-bold text-6xl ">
                  ALLEN
                </button>
              </div>
              <div className="absolute top-0 left-8 mt-4 mr-4 flex">
                <FcAbout
                  style={{ color: "black" }}
                  className="pr-8 h-18 w-18"
                ></FcAbout>
              </div>
              <div className="bg-sky-700 opacity-80 hover:opacity-100 hover:bg-sky-900 absolute rounded py-2 px-4 border-slate-800 border-spacing-2 top-0 right-0 mt-4 mr-4 flex">
                <MdLogin style={{ color: "white" }} className="pr-1 h-6 w-6" />
                <button className="text-white font-bold">Sign Up</button>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
