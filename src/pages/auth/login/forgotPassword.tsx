import { z } from "zod";
import Button from "../../../components/button";

import { Link } from "react-router-dom";
import Input from "../../../components/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  errorTexts,
  languageTextForgotPassword,
} from "../../../data/languageData";

function ForgotPassword({ language }: { language: string }) {
  const errorForgotPassword = errorTexts.filter(
    (lang) => lang.value === language
  )[0];
  const forgotPassworText = languageTextForgotPassword.filter(
    (lang) => lang.value === language
  )[0];
  const forgotPasswordSchema = z.object({
    email: z
      .string()
      .nonempty(errorForgotPassword.text1)
      .email(errorForgotPassword.text5),
  });

  type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onChange",
  });

  const onSubmit = (data: ForgotPasswordFormValues) => {
    console.log(data);
    console.log(errors);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="mt-4">
        <svg
          aria-label="Trouble logging in?"
          fill="#FFFFFF"
          height="96"
          role="img"
          viewBox="0 0 96 96"
          width="96"
        >
          <title>{forgotPassworText.text1}</title>
          <circle
            cx="48"
            cy="48"
            fill="none"
            r="47"
            stroke="#FFFFFF"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          ></circle>
          <path
            d="M60.931 70.001H35.065a5.036 5.036 0 0 1-5.068-5.004V46.005A5.036 5.036 0 0 1 35.065 41H60.93a5.035 5.035 0 0 1 5.066 5.004v18.992A5.035 5.035 0 0 1 60.93 70ZM37.999 39.996v-6.998a10 10 0 0 1 20 0v6.998"
            fill="none"
            stroke="#FFFFFF"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          ></path>
        </svg>
      </div>
      <p className="text-[white] font-semibold mt-4">
        {forgotPassworText.text1}
      </p>
      <p className="text-[#A8A8A8] w-[300px] text-[14px] text-center mt-2 ">
        {forgotPassworText.text2}
      </p>

      <form
        className="flex flex-col items-center mt-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <Input
            placeholder=" "
            classText={`mb-1 text-[12px] pb-2 pt-5 ${
              errors.email && "border border-red-500"
            } border-none rounded-[5px] `}
            type="email"
            id="email"
            labelText={forgotPassworText.text3}
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

        <div className="mt-3">
          <Button
            handleClick={() => {
              console.log("Button clicked");
            }}
            className={`flex items-center justify-center gap-2 bg-[#18208B] ${
              !isValid || isSubmitting ? "cursor-not-allowed" : ""
            }`}
            disabled={!isValid || isSubmitting}
          >
            <span>{forgotPassworText.text5}</span>
          </Button>
          <p className="text-center mt-2">
            {" "}
            <Link
              className=" text-[#6C88F6] text-[12px] "
              to="https://www.instagram.com/accounts/account_recovery/?source=web_account_recovery&username=&waterfall_id=35b3e9d8-73c6-4b0d-9cd3-076afe7e7e0a"
            >
              {forgotPassworText.text6}
            </Link>
          </p>
        </div>
        <div className="flex items-center mt-4">
          <div className="bg-[#262626] w-[107.38px] h-[1px]"></div>
          <p className="text-[#A8A8A8] mx-4 text-[13px] font-semibold">
            {forgotPassworText.text8}
          </p>
          <div className="w-[107.38px] bg-[#262626] h-[1px]"></div>
        </div>
        <Link
          className="text-[white] font-semibold flex gap-3 items-center mt-4 mb-10 text-[14px] hover:underline"
          to="/accounts/login"
        >
          {forgotPassworText.text7}
        </Link>
      </form>
    </div>
  );
}

export default ForgotPassword;
