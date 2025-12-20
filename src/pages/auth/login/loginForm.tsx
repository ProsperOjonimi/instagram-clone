import Buttton from "../../../components/button";
import Input from "../../../components/input";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),

  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type RegisterFormValues = z.infer<typeof loginSchema>;

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(loginSchema),
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
          <span>Log in</span>
        </Buttton>
      </div>
      <div className="flex items-center mt-4">
        <div className="bg-[#262626] w-[107.38px] h-[1px]"></div>
        <p className="text-[#A8A8A8] mx-4">OR</p>
        <div className="w-[107.38px] bg-[#262626] h-[1px]"></div>
      </div>
      <Link
        className="text-[#0095F6] flex gap-3 items-center mt-4 mb-4"
        to="/login"
      >
        <FaFacebook className="w-[24px] h-[24px]" /> Log in with Facebook
      </Link>
      <Link
        className="text-[white] font-semibold hover:underline duration-300"
        to="/login"
      >
        Forgot password?
      </Link>
    </form>
  );
}

export default LoginForm;
