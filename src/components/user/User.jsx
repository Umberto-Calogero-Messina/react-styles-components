import { StyledButton } from '../button/button.styles';
import { StyledUser } from './User.styles';

const User = ({ name, email, id }) => {
  return (
    <StyledUser>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{id}</p>
    </StyledUser>
  );
};

export default User;
