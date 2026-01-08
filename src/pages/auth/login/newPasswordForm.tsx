import PasswordInput from "../../../components/ui/passwordInput";
import { z } from "zod";
import { PASSWORD_REGEX } from "../signup/signUpForm";
import {
  errorTexts,
  languagesTextPasswordNew,
} from "../../../data/languageData";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../../components/ui/button";
import useUpdateUser from "../../../hooks/useUpdateuser";

import Spinner from "../../../components/ui/Spinner";

function NewPasswordForm({ language }: { language: string }) {
  const errorResetPassword = errorTexts.filter(
    (lang) => lang.value === language
  )[0];

  const resetText = languagesTextPasswordNew.filter(
    (lang) => lang.value === language
  )[0];

  const forgotPasswordSchema = z
    .object({
      newPassword: z
        .string()
        .nonempty(errorResetPassword.text1)
        .min(6, errorResetPassword.text6)
        .regex(PASSWORD_REGEX, errorResetPassword.text7),
      confirmPassword: z.string(),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    });

  type newPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<newPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onChange",
  });

  const { update, isPending } = useUpdateUser();
  const onSubmit = (data: newPasswordFormValues) => {
    const { newPassword } = data;

    update({ newPassword });
  };

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center flex-col px-8">
        <h3 className="text-[white] font-bold">{resetText.text1}</h3>
        <div className="mt-2">
          <p className="text-[14px] text-center text-[#A8A8A8]">
            {resetText.text2}
          </p>
        </div>
        <div className="mt-7 flex flex-col gap-6">
          <div>
            <div>
              {errors.newPassword && (
                <p className="text-[12px] mb-3 text-[#A8A89C]">
                  {errors.newPassword.message}
                </p>
              )}
            </div>
            <PasswordInput
              placeholder=" "
              classText={`bg-[#1A1A1A] mb-1 text-[12px] pb-2 pt-5 border-none ${
                errors.newPassword && "border border-red-500"
              } h-[39px]`}
              // passwordValue={passwordValue1}
              idValue="newPassword"
              labelText={resetText.text3}
              register={register}
              {...register("newPassword")}
            />
          </div>
          <div>
            <div>
              {errors.confirmPassword && (
                <p className="text-[12px] mb-3 text-[#A8A89C]">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <PasswordInput
              placeholder=" "
              // passwordValue={passwordValue2}
              idValue="confirmPassword"
              classText={`bg-[#1A1A1A] mb-1 text-[12px] pb-2 pt-5 border-none ${
                errors.confirmPassword && "border border-red-500"
              } h-[39px]`}
              register={register}
              labelText={resetText.text4}
              {...register("confirmPassword")}
            />
          </div>
        </div>
        <Button
          className={`bg-[#083858] h-[44px] mt-6 ${
            isSubmitting || (!isValid && "cursor-not-allowed")
          }`}
          disabled={isSubmitting || !isValid}
        >
          {isPending ? <Spinner /> : resetText.text5}
        </Button>
      </div>
    </form>
  );
}

export default NewPasswordForm;
