import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Backrooms Chatroom</Link>
        <nav>
          {user ? (
            <ul className="flex space-x-4">
              <li><Link to="/chat" className="hover:text-gray-300">Chat</Link></li>
              <li><Link to="/profile" className="hover:text-gray-300">Profile</Link></li>
              <li>
                <button onClick={logout} className="hover:text-gray-300">Logout</button>
              </li>
            </ul>
          ) : (
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-gray-300">Login</Link></li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;