import Button from './components/button/Button';
import User from './components/user/User';
import { USERS } from './constants/users';
import { GlobalStyle } from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* <Button color='blue' padding='0.5rem' rounded={true} hover={true}>Click Me</Button> */}
      <Button color="blue" padding="0.5rem" rounded hover>
        Click Me
      </Button>
      <Button color="green" padding="1rem">
        Click Me
      </Button>
      <Button color="orange" padding="2rem">
        Click Me
      </Button>

      {/* <User name="Pepe" email="pepe@gmail.com"></User>
      <User name="Laura" email="laura@gmail.com"></User>
      <User name="Julian" email="julian@gmail.com"></User>
      <User name="Felipe" email="felipe@gmail.com"></User> */}
      {USERS.map((user) => (
        <User key={user.id} id={user.id} name={user.name} email={user.email} />
      ))}
    </>
  );
};

export default App;
