import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import axios from 'axios';
import OtpInput from "otp-input-react";
import { useState,useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
//import Map_Method from './Map';
//import multi from "./phone_otp_verification_react_firebase-main/src/ui"

const Login = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const [data, setData] = useState([])
  const navigate=useNavigate();

  //const [list,setList]=useState([])

// useEffect(() =>{
//   axios.get("https://jsonplaceholder.typicode.com/posts")
//   .then((res)=>
//     setData(res.data),
//     console.log(data),
  
//   );
// },[]);


console.log("data", data);
  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => { },
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;
    if(formatPh.length === 13) {
      signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    } else if(ph.length===0){
      toast.error("Enter your Phone Number");
      setLoading(false)
   } else{
      toast.error("Enter a valid Phone Number of 10 digits");
      setLoading(false)
   }
    
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        navigate('/User');
        console.log(res);
        setUser(res.user);        
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        
      });
  }
  return (
    
    <section className="bg-emerald-500 flex items-center justify-center h-screen">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {showOTP ? (
           <>
           <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
             <BsFillShieldLockFill size={30} />
           </div>
           <label
             htmlFor="otp"
             className="font-bold text-xl text-white text-center"
           >
             Enter your OTP
           </label>
           <OtpInput
             value={otp}
             onChange={setOtp}
             OTPLength={6}
             otpType="number"
             disabled={false}
             autoFocus
             className="opt-container "
           ></OtpInput>
           <button
             onClick={onOTPVerify}
             className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
           >
             {loading && (
               <CgSpinner size={20} className="mt-1 animate-spin" />
             )}
             <span>Verify OTP</span>
           </button>
           
         </>
        ): (
          <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsTelephoneFill size={30} />
                </div>
                <label
                  htmlFor=""
                  className="font-bold text-xl text-white text-center"
                >
                  Verify your phone number
                </label>
                <PhoneInput country={"in"} value={ph} onChange={setPh} />
                <button
                  onClick={onSignup}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Request OTP</span>
                </button>
                {/* {data.map((user)=>{
                  return (
                    <>
                    <span>{user.id}</span>
                    <h1>{user.title}</h1>
                    </>
                  )
                })} */}
              </>
        )}
        
      </div>
    </section>
  );
};

export default Login;



