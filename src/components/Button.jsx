import '../styles/Button.css'

const Button = ({ text, isVisible }) => {
  return (
    <>
      {isVisible && <button>{text}</button>}
    </>

    
  );
};

export default Button;
