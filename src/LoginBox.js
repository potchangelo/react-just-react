import { useContext } from 'react';
import { AuthContext } from './App';

const fakeUser = { username: 'nice789', fullname: 'เต้า หมิงซื่อ' };

function LoginBox() {
  const { authState, authDispatch } = useContext(AuthContext);

  function loginSubmit(event) {
    event.preventDefault();
    authDispatch({ type: 'login', payload: fakeUser });
  }

  function logoutSubmit() {
    authDispatch({ type: 'logout' });
  }

  if (!!authState) {
    return (
      <div>
        <h3>เข้าสู่ระบบแล้วจ้า</h3>
        <p>Auth username = {authState.username}</p>
        <p>Auth fullname = {authState.fullname}</p>
        <p>
          <button onClick={logoutSubmit}>Log out</button>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={loginSubmit}>
      <h3>โปรดเข้าสู่ระบบ</h3>
      <p>
        <input type="text" placeholder="Username" />
      </p>
      <p>
        <input type="password" placeholder="Password" />
      </p>
      <p>
        <button type="submit">Log in</button>
      </p>
    </form>
  );
}

export default LoginBox;
