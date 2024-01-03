import '../styles/Button.css'

const Button = ({ text, isVisibleOnMobile }) => {
  return (
    <>
      {isVisibleOnMobile && <button>{text}</button>}
    </>

    
  );
};

export default Button;
