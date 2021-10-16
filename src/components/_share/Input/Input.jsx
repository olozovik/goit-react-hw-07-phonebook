import { InputStyled } from './InputStyled';

const Input = ({
  id,
  type,
  name,
  pattern,
  title,
  required,
  value,
  onChange,
}) => {
  return (
    <InputStyled
      type={type}
      id={id}
      name={name}
      pattern={pattern}
      title={title}
      required={required}
      value={value}
      onChange={onChange}
    />
  );
};

export { Input };
