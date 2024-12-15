import { useAuth } from '../../Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
    }}>
      <h1>Login Page</h1>
      <button style={{ marginTop: '60px' , position: 'absolute'}} onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
