// import logo from './logo.svg';
// import './App.css';

import { ButtonContainer } from "./styles";

const Button = ({label, onClick}) => {

    return (
      <ButtonContainer onClick={onClick} type="button">
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;
  