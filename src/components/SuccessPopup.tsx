interface SuccessPopupProps {
  onAnimationEnd: () => void;
}

function SuccessPopup({ onAnimationEnd }: SuccessPopupProps) {
  return (
    <>
      <aside
        role="alert"
        className="bg-popup animate-slideIn absolute left-[50%] top-[10px] z-10 w-[327px] rounded-xl p-6 md:top-[25px] md:w-[450px]"
        onAnimationEnd={onAnimationEnd}
      >
        <h2 className="text-popup">
          <svg
            className="mr-2 inline"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            fill="none"
            viewBox="0 0 20 21"
          >
            <path
              fill="#fff"
              d="M14.28 7.72a.748.748 0 0 1 0 1.06l-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.75.75 0 0 1 1.06 0Zm5.47 2.78A9.75 9.75 0 1 1 10 .75a9.76 9.76 0 0 1 9.75 9.75Zm-1.5 0A8.25 8.25 0 1 0 10 18.75a8.26 8.26 0 0 0 8.25-8.25Z"
            />
          </svg>
          Message Sent!
        </h2>
        <p className="text-popup mt-2">
          Thanks for completing the form. We’ll be in touch soon!
        </p>
      </aside>
    </>
  );
}

export default SuccessPopup;
