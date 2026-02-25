import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom';

const Products = () => {

    const location = useLocation();
    const isMainProductPage = location.pathname === "/product";

    return (
        <>
            <div>
                <div className='flex justify-center items-center'>
                    <Link
                        to="/product/man"
                        className='px-5 py-2 border border-gray-500 mx-5 hover:bg-gray-200'
                    >
                        Men
                    </Link>

                    <Link
                        to="/product/woman"
                        className='px-5 py-2 border border-gray-500 mx-5 hover:bg-gray-200'
                    >
                        Women
                    </Link>
                </div>
                {isMainProductPage && (
                    <h1 className="text-center text-3xl p-10 uppercase">
                        Product Page
                    </h1>
                )}
                <Outlet />
            </div>
        </>
    )
}

export default Products