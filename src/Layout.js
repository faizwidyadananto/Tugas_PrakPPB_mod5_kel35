import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { MdGroup } from 'react-icons/md';
import { GiGamepad } from 'react-icons/gi';

function Layout() {
  const location = useLocation();  // Dapatkan lokasi saat ini

  return (
    <div>
      {/* Render halaman berdasarkan rute */}
      <Outlet />

      {/* Tampilkan navigasi bottom hanya jika tidak berada di halaman login */}
      {location.pathname !== '/login' && (
        <footer>
          <NavLink to="/movie" className="iconWrapper">
            <HiHome className="icon" /> Movie
          </NavLink>
          <NavLink to="/game" className="iconWrapper">
            <GiGamepad className="icon" /> Game
          </NavLink>
          <NavLink to="/profile" className="iconWrapper">
            <MdGroup className="icon" /> Profile
          </NavLink>
        </footer>
      )}
    </div>
  );
}

export default Layout;
