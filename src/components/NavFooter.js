import ConsultationButton from '../UI/ConsultationButton';
import Logo from '../assets/logo.svg';

const NavFooter = (props) => {
  const padding = {
    nav: 'mt-4 md:mt-8',
    footer: 'pb-8 lg:pb-16',
  };
  return (
    <div className={`mx-4 flex justify-center ${padding[props.section]}`}>
      <div className="flex w-full max-w-1110 items-center justify-between">
        <a href="/">
          <img
            src={Logo}
            className="max-w-[2.75rem] md:max-w-none"
            alt="Logo"
          />
        </a>
        <ConsultationButton color={'black'} />
      </div>
    </div>
  );
};

export default NavFooter;
