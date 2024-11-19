import { Link } from 'react-router-dom';
import './NotFound.css'; // Include styles for the page

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>It seems the page you’re looking for doesn’t exist or has been moved.</p>
        <img
          src="https://via.placeholder.com/300x200"
          alt="Lost illustration"
          className="not-found-image"
        />
        <Link to="/" className="back-home-button">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
