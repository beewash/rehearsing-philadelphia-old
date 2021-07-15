import React from 'react';
import { NavLink } from 'react-router-dom';
// import { useQuery } from 'react-query';
// import { Link } from 'react-router-dom';
// import { sanity, imageUrlBuilder } from '../sanity';

function NavBar () {
    return (
        <header className="fixed inset-x-0 top-0 border-b-2 border-black">
            <div className="container flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact className="inline-flex items-center py-6 px-3 mr-4">
                        Logo
                    </NavLink>
                    <NavLink to="/schedule">
                        Schedule
                    </NavLink>
                    <NavLink to="/schedule">
                        Artists
                    </NavLink>
                </nav>
            </div>
        </header>
    )
};

export default NavBar;