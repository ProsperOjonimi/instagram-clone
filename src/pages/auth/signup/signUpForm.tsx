import { Link } from "react-router-dom";
import Buttton from "../../../components/button";
import Input from "../../../components/input";
import { IoLogoFacebook } from "react-icons/io";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const registerSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),

  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, and underscores"),

  email: z.string().email("Invalid email address"),

  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const passwordValue = watch("password");
  const onSubmit = (data: RegisterFormValues) => {
    console.log(data);
    console.log(errors);
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h4 className="w-[268px] text-[#A8A8A8] text-center font-semibold">
        Sign up to see photos and videos of your friends
      </h4>
      <div className="my-3">
        <Buttton
          handleClick={() => {
            console.log("Button clicked");
          }}
          className="flex items-center justify-center gap-2"
        >
          <span>
            <IoLogoFacebook className="w-[24px] h-[24px]" />
          </span>{" "}
          <span>Log in with Facebook</span>
        </Buttton>
      </div>
      <div className="flex items-center mb-4">
        <div className="bg-[#262626] w-[107.38px] h-[1px]"></div>
        <p className="text-[#A8A8A8] mx-4">OR</p>
        <div className="w-[107.38px] bg-[#262626] h-[1px]"></div>
      </div>
      <Input
        placeholder="Email"
        className="mb-2"
        type="email"
        id="email"
        {...register("email")}
      />
      <div className="relative">
        <Input
          placeholder="Password"
          className="mb-2"
          type={`${showPassword ? "text" : "password"}`}
          id="password"
          {...register("password")}
        />

        {passwordValue && (
          <Buttton
            onClick={() => setShowPassword((x: boolean) => !x)}
            className="absolute w-[54px]  h-[25px] bg-[#25292E] top-[6px] right-2  rounded-sm
             ring-2 ring-white "
          >
            {showPassword ? "Hide" : "Show"}
          </Buttton>
        )}
      </div>
      <Input
        placeholder="Full Name"
        className="mb-2"
        type="text"
        id="fullName"
        {...register("fullName")}
      />
      <Input
        placeholder="Username"
        className="mb-2"
        type="text"
        id="userName"
        {...register("username")}
      />
      <div className="w-[269px] mt-3 flex flex-col gap-3">
        <p className="text-[#A8A8A8] text-[12px]">
          People who use our service may have uploaded your contact information
          to Instagram.{" "}
          <Link to="/signup" className="text-[#708DF0]">
            Learn More
          </Link>
        </p>
        <p className="text-[#A8A8A8] text-[12px]">
          By signing up, you agree to our{" "}
          <Link to="/signup" className="text-[#708DF0]">
            Terms
          </Link>{" "}
          ,{" "}
          <Link to="/signup" className="text-[#708DF0]">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link to="/signup" className="text-[#708DF0]">
            Cookies Policy
          </Link>{" "}
          .
        </p>
      </div>
      <div className="mt-4">
        <Buttton
          handleClick={() => {
            console.log("Button clicked");
          }}
          className={`flex items-center justify-center gap-2 ${
            !isValid || isSubmitting ? "cursor-not-allowed" : ""
          }`}
          disabled={!isValid || isSubmitting}
        >
          <span>Sign Up</span>
        </Buttton>
      </div>
    </form>
  );
}

export default SignUpForm;
