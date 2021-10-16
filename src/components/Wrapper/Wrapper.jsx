import PropTypes from 'prop-types';
import { WrapperStyled } from './Wrapper.styled';

function Wrapper({ children }) {
  return <WrapperStyled>{children}</WrapperStyled>;
}

Wrapper.propTypes = {
  children: PropTypes.node,
};

export { Wrapper };
