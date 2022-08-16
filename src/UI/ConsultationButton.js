const ConsultationButton = (props) => {
  const btnColor = {
    black: 'bg-black hover:bg-lavender',
    orange: 'bg-redOrange hover:bg-orange',
  };

  return (
    <button
      className={`h-11 w-44 rounded-full text-sm text-white transition-all duration-300 ease-out md:h-14 md:w-56 ${
        btnColor[props.color]
      }`}
    >
      Free Consultation
    </button>
  );
};

export default ConsultationButton;
