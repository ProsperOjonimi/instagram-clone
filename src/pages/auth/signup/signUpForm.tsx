import { Link } from "react-router-dom";
import Button from "../../../components/button";
import Input from "../../../components/input";
import { IoLogoFacebook } from "react-icons/io";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import PasswordInput from "../../../components/passwordInput";
import { errorTexts, languageTextSignup } from "../../../data/languageData";
import { useSignup } from "../../../hooks/useSignup";
import Spinner from "../../../components/Spinner";

export const PASSWORD_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!$@%])[A-Za-z\d!$@%]{6,}$/;

function SignUpForm({ language }: { language: string }) {
  const errorSignUp = errorTexts.filter((lang) => lang.value === language)[0];
  const { signup, isPending } = useSignup();
  const signupText = languageTextSignup.filter(
    (lang) => lang.value === language
  )[0];

  const registerSchema = z.object({
    fullName: z.string().nonempty(errorSignUp.text1).min(2, errorSignUp.text2),

    username: z
      .string()
      .nonempty(errorSignUp.text1)
      .min(3, errorSignUp.text3)
      .regex(/^[a-zA-Z0-9_]+$/, errorSignUp.text4),

    email: z.string().nonempty(errorSignUp.text1).email(errorSignUp.text5),

    password: z
      .string()
      .nonempty(errorSignUp.text1)
      .min(6, errorSignUp.text6)
      .regex(PASSWORD_REGEX, errorSignUp.text7),
  });
  type RegisterFormValues = z.infer<typeof registerSchema>;

  const {
    register,
    handleSubmit,
    watch,

    formState: { errors, isSubmitting, isValid },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const passwordValue = watch("password");
  const onSubmit = (data: RegisterFormValues) => {
    const { fullName, username, email, password } = data;

    signup({ fullName, username, email, password });
  };

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h4 className="w-[268px] text-[#A8A8A8] text-center font-semibold">
        {signupText.text1}
      </h4>
      <div className="my-3">
        <Button
          handleClick={() => {
            console.log("Button clicked");
          }}
          className="flex items-center justify-center gap-2 cursor-not-allowed"
          disabled={true}
        >
          <span>
            <IoLogoFacebook className="w-[24px] h-[24px]" />
          </span>{" "}
          <span>{signupText.text2}</span>
        </Button>
      </div>
      <div className="flex items-center mb-4">
        <div className="bg-[#262626] w-[107.38px] h-[1px]"></div>
        <p className="text-[#A8A8A8] mx-4">{signupText.text17}</p>
        <div className="w-[107.38px] bg-[#262626] h-[1px]"></div>
      </div>
      <div>
        <Input
          placeholder=" "
          classText={`mb-1 text-[12px] pb-2 pt-5 ${
            errors.email && "border border-red-500"
          }`}
          type="email"
          id="email"
          labelText={signupText.text3}
          {...register("email")}
        />
        <div>
          {errors.email && (
            <p className="text-red-500 text-[12px] mb-3">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <PasswordInput
          classText={`mb-1 text-[12px] pb-2 pt-5 ${
            errors.password && "border border-red-500"
          }`}
          idValue="password"
          passwordValue={passwordValue}
          register={register}
          labelText={signupText.text4}
          {...register("password")}
        />
        <div>
          {errors.password && (
            <p className="text-red-500 text-[12px] mb-3 max-w-[259px]">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>
      <div>
        <Input
          placeholder=" "
          classText={`mb-1 text-[12px] pb-2 pt-5 ${
            errors.fullName && "border border-red-500"
          }`}
          type="text"
          id="fullName"
          labelText={signupText.text5}
          {...register("fullName")}
        />
        <div>
          {errors.fullName && (
            <p className="text-red-500 text-[12px] mb-3">
              {errors.fullName.message}
            </p>
          )}
        </div>
      </div>
      <div>
        <Input
          placeholder=" "
          classText={`mb-1 text-[12px] pb-2 pt-5 ${
            errors.username && "border border-red-500"
          }`}
          type="text"
          id="username"
          labelText={signupText.text6}
          {...register("username")}
        />
        <div>
          {errors.username && (
            <p className="text-red-500 text-[12px] mb-3">
              {errors.username.message}
            </p>
          )}
        </div>
      </div>
      <div className="w-[269px] mt-3 flex flex-col gap-3 text-center">
        <p className="text-[#A8A8A8] text-[12px]">
          {signupText.text7}{" "}
          <Link to="/signup" className="text-[#708DF0]">
            {signupText.text8}
          </Link>
        </p>
        <p className="text-[#A8A8A8] text-[12px] text-center">
          {signupText.text9}{" "}
          <Link to="/signup" className="text-[#708DF0]">
            {signupText.text10}
          </Link>{" "}
          ,{" "}
          <Link to="/signup" className="text-[#708DF0]">
            {signupText.text11}
          </Link>{" "}
          {signupText.text12}{" "}
          <Link to="/signup" className="text-[#708DF0]">
            {signupText.text13}
          </Link>{" "}
          .
        </p>
      </div>
      <div className="mt-4">
        <Button
          handleClick={() => {
            console.log("Button clicked");
          }}
          className={`flex items-center justify-center gap-2 ${
            !isValid || isSubmitting ? "cursor-not-allowed" : ""
          } `}
          disabled={!isValid || isSubmitting}
        >
          {isPending ? <Spinner /> : <span>{signupText.text14}</span>}
        </Button>
      </div>
    </form>
  );
}

export default SignUpForm;
