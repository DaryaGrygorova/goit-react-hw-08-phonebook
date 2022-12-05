import { nanoid } from 'nanoid';
import {Input, StyledErrorMessage } from './InputGroup.styled';

const InputGroup = ({
    name,
    type,
    autoComplete,
  }: {
    name: string;
    type: string;
    autoComplete: boolean;
  }) => {
    const inputId = nanoid();
    return (
      <>
        <label htmlFor={inputId}>{name ? name[0].toUpperCase() + name.slice(1) : ''}</label>
        <Input
          id={inputId}
          type={type}
          name={name}
          autoComplete={autoComplete ? 'on' : 'off'}
        />
        <StyledErrorMessage name={name} component="div" />
      </>
    );
  };
  
  export default InputGroup;