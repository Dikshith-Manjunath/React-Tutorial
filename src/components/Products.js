import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

export default function Products() {
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex flex-column mx-4" >
        <form className="d-flex flex-column" role="search" style={{ width: '25rem', fontWeight: 'bold', fontSize: '2rem' }}>
          Search Items:
          <input className="form-control me-2 my-3" type="search" placeholder="Search" aria-label="Search" />
            {/* Use relative navigation */}
            <nav className="container d-flex flex-row">
              <button className="btn btn-outline-info my-3" onClick={() => { navigate('new'); }} type="button"> {/*This is a relative link and doesn't need a backslash for working */}
                New
              </button>
              <button className="btn btn-outline-info my-3 mx-2" onClick={() => { navigate('featured'); }} type="button">
                Featured
              </button>
            </nav>
        </form>
      </div>
      {/* Ensure Outlet is rendered to display nested routes */}
      <Outlet />
    </>
  );
}
