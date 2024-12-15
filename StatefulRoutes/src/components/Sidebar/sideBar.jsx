import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div style={{
      width: '200px',
      height: '100vh',
      backgroundColor: '#f0f0f0',
      padding: '20px',
      boxSizing: 'border-box',
      position: 'fixed',
    }}>
      <h3>Sidebar</h3>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ margin: '10px 0' }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ margin: '10px 0' }}>
            <Link to="/counter">Counter</Link>
          </li>
          <li style={{ margin: '10px 0' }}>
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
