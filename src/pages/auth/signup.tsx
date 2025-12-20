import { Link } from "react-router-dom";
import SignUpForm from "./signUpForm";

function SignUp() {
  return (
    <div className="bg-[#0C1014]">
      <div className="bg-[#0C1014] mb-[44px] flex justify-center w-full ">
        <div className=" py-[10px] px-0">
          <div className="flex flex-col w-[350px] border border-[#363636] bg-[#0C1014] items-center pb-10">
            <div className="w-[175px] mt-[36px] mb-4">
              <i
                data-visualcompletion="css-img"
                aria-label="Instagram"
                role="img"
                style={{
                  backgroundImage:
                    ' url("https://static.cdninstagram.com/rsrc.php/v4/yz/r/H_-3Vh0lHeK.png")',
                  backgroundPosition: "0px -2907px",
                  backgroundSize: "auto",
                  width: "175px",
                  height: "51px",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                }}
              ></i>
            </div>
            <SignUpForm />
          </div>
          <div className="border border-[#363636]  mt-3  text-[#A8A8A8] flex flex-col items-center py-4">
            <p>Have an account?</p>
            <Link to="/login" className="text-[#708DF0]">
              Log in
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-[83px]"></div>
    </div>
  );
}

export default SignUp;
