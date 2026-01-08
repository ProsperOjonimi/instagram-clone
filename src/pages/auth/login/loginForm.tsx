import Input from "../../../components/ui/input";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import PasswordInput from "../../../components/ui/passwordInput";
import Button from "../../../components/ui/button";
import { errorTexts, languageTextLogin } from "../../../data/languageData";
import { useLogin } from "../../../hooks/useLogin";
import Spinner from "../../../components/ui/Spinner";

function LoginForm({ language }: { language: string }) {
  const errorLogin = errorTexts.filter((lang) => lang.value === language)[0];
  const loginText = languageTextLogin.filter(
    (lang) => lang.value === language
  )[0];

  const loginSchema = z.object({
    email: z.string().nonempty(errorLogin.text1).email(errorLogin.text5),

    password: z.string().nonempty(errorLogin.text1).min(6, errorLogin.text6),
  });

  type LoginFormValues = z.infer<typeof loginSchema>;

  const { login, isPending, isError } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const passwordValue = watch("password");
  const onSubmit = (data: LoginFormValues) => {
    const { email, password } = data;

    if (!email || !password) return;

    login({ email, password });
  };

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Input
          placeholder=" "
          classText={`mb-1 text-[12px] pb-2 pt-5 ${
            errors.email && "border border-red-500"
          }`}
          type="email"
          id="email"
          labelText={loginText.text1}
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
          placeholder=" "
          classText={`mb-1 text-[12px] pb-2 pt-5 ${
            errors.password && "border border-red-500"
          }`}
          passwordValue={passwordValue}
          register={register}
          idValue="password"
          labelText={loginText.text2}
          {...register("password")}
        />
        <div>
          {errors.password && (
            <p className="text-red-500 text-[12px] mb-3">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <Button
          className={`flex items-center justify-center gap-2 ${
            !isValid || isSubmitting ? "cursor-not-allowed" : ""
          }`}
          disabled={!isValid || isSubmitting}
        >
          {isPending ? <Spinner /> : <span>{loginText.text3}</span>}
        </Button>
      </div>
      <div className="flex items-center mt-4">
        <div className="bg-[#262626] w-[107.38px] h-[1px]"></div>
        <p className="text-[#A8A8A8] mx-4 text-[13px] font-semibold">
          {loginText.text8}
        </p>
        <div className="w-[107.38px] bg-[#262626] h-[1px]"></div>
      </div>
      <Link
        className="text-[#0095F6] flex gap-3 items-center mt-4 mb-4 pointer-events-none cursor-not-allowed"
        to="/accounts/login"
        aria-disabled={true}
      >
        <FaFacebook className="w-[24px] h-[24px]" /> {loginText.text4}
      </Link>
      {isError && (
        <div className="px-[40px] text-center pb-[10px]">
          <span className="text-[#D8281A] text-[14px]">{loginText.text9}</span>
        </div>
      )}
      <Link
        className="text-[white] font-semibold hover:underline  duration-300"
        to="/accounts/password/reset"
      >
        {loginText.text5}
      </Link>
    </form>
  );
}

export default LoginForm;
