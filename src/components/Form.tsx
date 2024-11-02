import { useForm, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import SuccessPopup from "./SuccessPopup.tsx";
import { useState, useEffect } from "react";

function Form() {
  type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    queryType: string;
    message: string;
    consent: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState,
    formState: { errors, isSubmitting },
    control,
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      queryType: "",
      message: "",
      consent: "",
    },
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
      setShowSuccess(true);
    }
  }, [formState, reset]);

  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);

    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Form submitted");
        resolve(true);
      }, 500); // Simulate a 2-second delay
    });
  };

  const selectedQueryType: string = watch("queryType");

  return (
    <>
      {showSuccess && (
        <SuccessPopup onAnimationEnd={() => setShowSuccess(false)} />
      )}

      <form
        className="relative mx-auto my-6 max-w-[343px] rounded-2xl bg-form p-6 leading-8 md:mt-[128px] md:max-w-[736px] md:p-10"
        onSubmit={handleSubmit(onSubmit)}
        method="post"
        noValidate
      >
        <svg
          className="hidden"
          id="definition"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <symbol id="required" viewBox="0 0 32 32">
              <g>
                <path d="M 17.699219 17 L 23.898438 25.398438 L 21.5 27 L 16 18.300781 L 10.5 27 L 8.199219 25.398438 L 14.398438 17 L 5.101563 14.601563 L 6 12 L 15.101563 15.199219 L 14.5 5 L 17.5 5 L 17 15.199219 L 26 12 L 26.800781 14.699219 Z" />
              </g>
            </symbol>
          </defs>
        </svg>
        <h2 className="text-[2rem] font-bold tracking-tight">Contact Us</h2>
        <div className="mt-7 grid md:grid-cols-2 md:gap-x-2.5">
          <div>
            <label htmlFor="firstName">
              First Name
              <svg
                className="ml-2 inline h-2 w-2 fill-asterisk align-text-top"
                focusable="false"
                aria-hidden="true"
              >
                <use xlinkHref="#required"></use>
              </svg>
            </label>
            <input
              type="text"
              id="firstName"
              autoComplete="given-name"
              required={true}
              {...register("firstName", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              aria-invalid={errors.firstName ? "true" : "false"}
              className={`hover:border-hover hover: mt-1 w-full cursor-pointer rounded-lg border px-6 py-2 shadow transition-all focus:border-focus focus:outline-none ${errors.firstName ? "border-error" : "border-neutral"}`}
            />
            <p
              role="alert"
              className={`min-h-[2rem] text-error ${errors.firstName ? "visible" : "invisible"}`}
            >
              {errors.firstName?.message}
            </p>
          </div>

          <div>
            <label htmlFor="lastName">
              Last Name
              <svg
                className="ml-2 inline h-2 w-2 fill-asterisk align-text-top"
                focusable="false"
                aria-hidden="true"
              >
                <use xlinkHref="#required"></use>
              </svg>
            </label>
            <input
              type="text"
              id="lastName"
              autoComplete="family-name"
              required={true}
              {...register("lastName", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
              aria-invalid={errors.lastName ? "true" : "false"}
              className={`hover:border-hover hover: mt-1 w-full cursor-pointer rounded-lg border px-6 py-2 shadow transition-all focus:border-focus focus:outline-none ${errors.lastName ? "border-error" : "border-neutral"}`}
            />
            <p
              role="alert"
              className={`min-h-[2rem] text-error ${errors.lastName ? "visible" : "invisible"}`}
            >
              {errors.lastName?.message}
            </p>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="email">
              Email Address
              <svg
                className="ml-2 inline h-2 w-2 fill-asterisk align-text-top"
                focusable="false"
                aria-hidden="true"
              >
                <use xlinkHref="#required"></use>
              </svg>
            </label>
            <input
              type="text"
              id="email"
              autoComplete="email"
              required={true}
              {...register("email", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Please enter a valid email address",
                },
              })}
              aria-invalid={errors.email ? "true" : "false"}
              className={`hover:border-hover hover: mt-1 w-full cursor-pointer rounded-lg border px-6 py-2 shadow transition-all focus:border-focus focus:outline-none ${errors.email ? "border-error" : "border-neutral"}`}
            />
            <p
              role="alert"
              className={`min-h-[2rem] text-error ${errors.email ? "visible" : "invisible"}`}
            >
              {errors.email?.message}
            </p>
          </div>

          <div className="md:col-span-2">
            <fieldset className="md:grid md:grid-cols-2 md:gap-x-2.5">
              <legend>
                Query Type
                <svg
                  className="ml-2 inline h-2 w-2 fill-asterisk align-text-top"
                  focusable="false"
                  aria-hidden="true"
                >
                  <use xlinkHref="#required"></use>
                </svg>
              </legend>

              <label
                htmlFor="generalEnquiry"
                className={`hover:border-hover relative mt-4 flex w-full cursor-pointer items-center rounded-lg border px-6 py-2 transition-all hover:shadow peer-checked:bg-blue-100 ${selectedQueryType === "general_enquiry" ? "bg-selected" : ""} ${errors.queryType ? "border-error" : "border-neutral"}`}
              >
                {" "}
                <input
                  type="radio"
                  value="general_enquiry"
                  id="generalEnquiry"
                  autoComplete="off"
                  required={true}
                  {...register("queryType", {
                    required: {
                      value: true,
                      message: "Please select a query type",
                    },
                  })}
                  aria-invalid={errors.queryType ? "true" : "false"}
                  className="peer absolute h-5 w-5 opacity-0"
                />{" "}
                <div></div>
                <svg
                  className="absolute opacity-100 transition-all peer-checked:opacity-0"
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  height="1.25rem"
                  width="1.25rem"
                  viewBox="0 0 34 34"
                  aria-hidden="true"
                  focusable="false"
                >
                  <circle
                    className="radioOutline"
                    cx="17"
                    cy="17"
                    r="15"
                    fill="none"
                    stroke="hsl(186, 15%, 59%)"
                    strokeWidth="3"
                  />
                </svg>
                <svg
                  className="absolute mr-3 opacity-0 transition-all peer-checked:opacity-100"
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  height="1.25rem"
                  width="1.25rem"
                  viewBox="0 0 34 34"
                  aria-hidden="true"
                  focusable="false"
                >
                  <circle
                    className="radioOutline"
                    cx="17"
                    cy="17"
                    r="15"
                    fill="none"
                    stroke="hsl(169, 82%, 27%)"
                    strokeWidth="3"
                  />
                  <circle
                    className=""
                    cx="17"
                    cy="17"
                    r="9"
                    fill="hsl(169, 82%, 27%)"
                  />
                </svg>
                <span className="ml-10">General Enquiry</span>
              </label>

              <label
                htmlFor="supportRequest"
                className={`hover:border-hover relative mt-4 flex w-full cursor-pointer items-center rounded-lg border px-6 py-2 transition-all hover:shadow peer-checked:bg-blue-100 ${selectedQueryType === "support_request" ? "bg-selected" : ""} ${errors.queryType ? "border-error" : "border-neutral"}`}
              >
                {" "}
                <input
                  type="radio"
                  value="support_request"
                  id="supportRequest"
                  autoComplete="off"
                  required={true}
                  {...register("queryType", {})}
                  aria-invalid={errors.queryType ? "true" : "false"}
                  className="peer absolute h-5 w-5 opacity-0"
                />{" "}
                <div></div>
                <svg
                  className="absolute opacity-100 transition-all peer-checked:opacity-0"
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  height="1.25rem"
                  width="1.25rem"
                  viewBox="0 0 34 34"
                  aria-hidden="true"
                  focusable="false"
                >
                  <circle
                    className="radioOutline"
                    cx="17"
                    cy="17"
                    r="15"
                    fill="none"
                    stroke="hsl(186, 15%, 59%)"
                    strokeWidth="3"
                  />
                </svg>
                <svg
                  className="absolute mr-3 opacity-0 transition-all peer-checked:opacity-100"
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  height="1.25rem"
                  width="1.25rem"
                  viewBox="0 0 34 34"
                  aria-hidden="true"
                  focusable="false"
                >
                  <circle
                    className="radioOutline"
                    cx="17"
                    cy="17"
                    r="15"
                    fill="none"
                    stroke="hsl(169, 82%, 27%)"
                    strokeWidth="3"
                  />
                  <circle
                    className=""
                    cx="17"
                    cy="17"
                    r="9"
                    fill="hsl(169, 82%, 27%)"
                  />
                </svg>
                <span className="ml-10">Support Request</span>
              </label>

              <p
                role="alert"
                className={`min-h-[2rem] text-error ${errors.queryType ? "visible" : "invisible"}`}
              >
                {errors.queryType?.message}
              </p>
            </fieldset>
          </div>
        </div>

        <div>
          <label htmlFor="message">
            Message
            <svg
              className="ml-2 inline h-2 w-2 fill-asterisk align-text-top"
              focusable="false"
              aria-hidden="true"
            >
              <use xlinkHref="#required"></use>
            </svg>
          </label>
          <textarea
            id="message"
            rows={3}
            autoComplete="off"
            required={true}
            {...register("message", {
              required: {
                value: true,
                message: "This field is required",
              },
              maxLength: {
                value: 300,
                message: "Too many characters",
              },
            })}
            aria-invalid={errors.message ? "true" : "false"}
            className={`hover:border-hover hover: mt-1 w-full cursor-pointer rounded-lg border px-6 py-2 shadow transition-all focus:border-focus focus:outline-none ${errors.message ? "border-error" : "border-neutral"}`}
          />
          <p
            role="alert"
            className={`min-h-[2rem] text-error ${errors.message ? "visible" : "invisible"}`}
          >
            {errors.message?.message}
          </p>
        </div>

        <div className="relative">
          <div className="flex">
            <input
              type="checkbox"
              id="consent"
              value="yes"
              className="peer absolute left-1 top-5 z-10 h-[18px] w-[18px] cursor-pointer opacity-0 transition-all hover:shadow md:left-0 md:top-2"
              {...register("consent", {
                required: {
                  value: true,
                  message:
                    "To submit this form, please consent to being contacted",
                },
              })}
            />
            <div
              className={`border-checkbox peer-hover:border-hover absolute left-1 top-5 h-[18px] w-[18px] rounded-sm border-2 transition-all peer-checked:opacity-0 ${errors.consent ? "border-error" : ""} md:left-0 md:top-2`}
            ></div>
            <svg
              className="absolute left-1 top-5 opacity-0 transition-all peer-checked:opacity-100 md:left-0 md:top-2"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 18 18"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="#0C7D69"
                d="M16.5 0h-15A1.5 1.5 0 0 0 0 1.5v15A1.5 1.5 0 0 0 1.5 18h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 16.5 0Zm-3.22 7.28-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.751.751 0 0 1 1.06 1.06Z"
              />
            </svg>

            <label
              htmlFor="consent"
              className="ml-10 max-w-[232px] md:max-w-none"
            >
              I consent to being contacted by the team
              <svg
                className="ml-2 inline h-2 w-2 fill-asterisk align-text-top"
                focusable="false"
                aria-hidden="true"
              >
                <use xlinkHref="#required"></use>
              </svg>
            </label>
          </div>
          <p
            role="alert"
            className={`min-h-[2rem] text-error ${errors.consent ? "visible" : "invisible"}`}
          >
            {errors.consent?.message}
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-submit text-submit hover:bg-hover active:bg-active relative w-full rounded-lg py-4 text-lg font-bold tracking-wide transition-all hover:shadow disabled:bg-red-300"
        >
          {!isSubmitting && "Submit"}
          {isSubmitting && (
            <svg
              className="ml inline-block h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
        </button>
        {process.env.NODE_ENV === 'development' && <DevTool control={control} />}
      </form>
    </>
  );
}

export default Form;
